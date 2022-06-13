import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { match } from "assert";
import { SocketAddress } from "net";
import { EMPTY } from "rxjs";
import { Socket } from "socket.io";
import { chatRoomService } from "src/chatRoom/chatRoom.service";
import { roomMessageService } from "src/chatRoom/roomMessage.service";
import { GamesDto } from "src/dto-classes/game.dto";
import { LiveGameDto } from "src/dto-classes/liveGame.dto";
import { messageDto } from "src/dto-classes/message.dtp";
import { chatRoom } from "src/entities/chatRoom.entity";
import { liveGame } from "src/entities/liveGame.entity";
import { User } from "src/entities/user.entity";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";
import { messageService } from "src/messages/message.service";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { gamePlayService } from "./gamePlay.service";


export class moveData {
	player1 : number
	player2 : number
	movement : string
}


var playersStat = new Array
var ballStat = new Array
var intervals = new Array
var sockets = new Map<string,Array<Socket>>()

var matchMakingarray = new Array
@WebSocketGateway()
export class chatGateway implements OnGatewayConnection , OnGatewayDisconnect {


	constructor(private messageServ : messageService , private userServ : UserService, @InjectRepository(User)
	private usersRepository: Repository<User> , 
	private gamePlaysServ : gamePlayService, 
	private liveGameServ : liveGameService ,
	private roomMessageServ : roomMessageService,
	private chatRoomServ : chatRoomService ,
	private readonly jwtService: JwtService,
	private gameServ : GamesService)
	{
	}
	@WebSocketServer()
	server = [];
	async handleDisconnect(client: Socket) 
	{
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);

			console.log("------ desconnection -----");
			if(Object.keys(sender_id).length !== 0)
			{
				if(matchMakingarray.indexOf(sender_id[0].userName) != -1)
				{
					matchMakingarray.splice(matchMakingarray.indexOf(sender_id[0].userName),1)
				}
				let player2 = await this.liveGameServ.getGameByPlayer(sender_id[0].userName)
				if (typeof player2 !== "undefined")
				{
					var game : GamesDto = new(GamesDto)
					game.winner_user = player2
					game.loser_user = sender_id[0].userName
					game.Score = "D.N.F-D.N.F"
					game.played_at = new Date()
					this.gameServ.InsertGame(game)
					this.liveGameServ.deleteGame(sender_id[0].userName)
					var playerSocket : Socket[] = [];
					playersStat = playersStat.filter(element => element.player1 === sender_id[0].userName || element.player2 === sender_id[0].userName)
					console.log(intervals.find(element => element?.player1 === sender_id[0].userName || element?.player2 === sender_id[0].userName).id)
					if (typeof intervals.find(element => element?.player1 === sender_id[0].userName || element?.player2 === sender_id[0].userName).id != "undefined"){
						console.log("here*******")
						clearInterval(intervals.find(element => element?.player1 === sender_id[0].userName || element?.player2 === sender_id[0].userName).id)
					}
					playerSocket = sockets.get(player2);
					for(let ids of playerSocket)
					{
						ids.emit("opponentLeft",{user : player2})
					}
				}
				let array  = sockets.get(sender_id[0].userName)	
				let i = 0
				if(array != undefined)
				{
					array.forEach(element => {
						if (element.id == client.id )
							array.splice(i,1)
						i++
					});
				}
				if(array == undefined || array.length == 0)
					this.userServ.updateActive(false,sender_id[0].userName)
				if(array != undefined)
				{
					for (let [key, value] of sockets) {
						if(key == sender_id[0].userName)
						{
							for(let node of value)
								console.log(node.id)
						}
					}
				}
				console.log("----------------------");
			}
		}
	}
	async handleConnection(client: Socket, ...args :any) 
	{
		let auth_token : string  = await client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			console.log("------ connection ...-----");
			if(Object.keys(sender_id).length !== 0)
			{
				console.log(sender_id[0].userName)
				if( sockets.get(sender_id[0].userName) != undefined)
				{
					for (let [key, value] of sockets) {
						if(key == sender_id[0].userName)
						{
							value.push(client);
							sockets.set(sender_id[0].userName,value)
							break;
						}
					}
				}
				else
				{
					var obj : Array<Socket> = [];
					obj.push(client);
					sockets.set(sender_id[0].userName,obj);
				}
				for (let [key, value] of sockets) {
					if(key == sender_id[0].userName)
					{
						for(let node of value)
							console.log(node.id)
					}
				}
				this.userServ.updateActive(true,sender_id[0].userName)
				console.log("-----------------------");
				}
			}
		// throw new Error("Method not implemented.");
	}

	@SubscribeMessage('message')
	async handleMessage(client : Socket , text: any)
	{ 
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			if(Object.keys(sender_id).length !== 0)
			{
				var data = new messageDto() 
				data.message = text[0] 
				data.senderId = sender_id[0].userName
				data.reciverId = text[1]
				data.time = new Date()
				await this.messageServ.createMessage(data)
				var conversation : messageDto = await this.messageServ.getConversation(data.senderId,data.reciverId);
				var senderSock : Socket[] = [];
				var reciverSock : Socket[] = [];
				senderSock = sockets.get(data.senderId);
				for(let ids of senderSock)
				{
					ids.emit("message",conversation)
				}
				reciverSock = sockets.get(data.reciverId);
				for(let ids of reciverSock)
				{
					ids.emit("message",conversation)
				}
			}
		}
	}

	@SubscribeMessage('matchmaking')
	async matchmaking(client: Socket, test: any)
	{
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let user_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			var player : Socket[] = [];
			var player2 : Socket[] = [];
			console.log("----------matchMaking-------------")
			if (matchMakingarray.indexOf(user_id[0].userName) == -1){
				matchMakingarray.push(user_id[0].userName)
			}

			if (matchMakingarray.length > 1)
			{
				let game : LiveGameDto = new(LiveGameDto)
				player = sockets.get(user_id[0].userName)
				player2 = sockets.get(matchMakingarray[0])
				game.player1 = matchMakingarray[0]
				game.player2 =  matchMakingarray[1]
				game.time = new Date()
				await this.liveGameServ.saveGame(game)
				this.gamePlaysServ.init(game.player1,game.player2,playersStat,ballStat)
				console.log("player :" , user_id[0].userName)
				console.log("player 2:" , matchMakingarray[0])
				for(let ids of player)
				{
					ids.emit("matchmaking", [matchMakingarray[0], matchMakingarray[1]])
				}
				for(let ids of player2)
				{
					ids.emit("matchmaking", [matchMakingarray[0], matchMakingarray[1]])
				}
				console.log("--------------------------")
				matchMakingarray.splice(0,2)
			}
			else
			{
				for(let ids of player)
				{
					ids.emit("matchmaking", "still waiting" )
				}
				console.log("--------------------------")
			}
		}
	}
	@SubscribeMessage('setInterval')
	async setInterval(client: Socket, test: any)
	{
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			var player : Socket[] = [];
			var player2 : Socket[] = [];
			if (userInfo.length > 0){
				let game : LiveGameDto = await this.liveGameServ.getGame(userInfo[0].userName)
				player = sockets.get(game[0].player1)
				player2 = sockets.get(game[0].player2)
				console.log(game[0].player1, game[0].player2)
				const interval = setInterval(() => this.gamePlaysServ.movingBall(userInfo[0].userName,ballStat,playersStat,player,player2) , 10)
				intervals.push({id:interval,player1:game[0].player1,player2:game[0].player2})
			}
		}
	}
	@SubscribeMessage('playing')
	async playing(client: Socket, body: moveData)
	{
		console.log("--------playing-------------")
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			if(Object.keys(userInfo).length !== 0)
			{
				let liveGame : LiveGameDto = await this.liveGameServ.getGame(userInfo[0].userName)
				var player1 : Socket[] = [];
				var player2 : Socket[] = [];
				player1 = sockets.get(liveGame[0].player1);
				player2 = sockets.get(liveGame[0].player2);
				this.gamePlaysServ.movingPaddles(playersStat,userInfo[0].userName,body, player1, player2, liveGame)
			}
		
		}
	}

	@SubscribeMessage('startChannels')
	async handleChannels(client : Socket , text: any)
	{
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			if(Object.keys(userInfo).length !== 0)
			{
				let test = await this.usersRepository.find({
					relations: ['chatRooms'],
				where: { userName: userInfo.userName }
				});
				let rooms : any = test[0].chatRooms;
				if(rooms.length !== 0)
				{
					for(let room of rooms)
					{
						client.join(room.id)
					}
				}
			}
		}
	}
	@SubscribeMessage('roomMessage')
	async handleRoomMessage(client : Socket , data: any)
	{
		let auth_token = client.handshake.auth.Authorization;
		if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
		{
			const tokenInfo : any = this.jwtService.decode(auth_token);
			let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
			if(Object.keys(userInfo).length !== 0)
			{
				let room : chatRoom = await this.chatRoomServ.getRoomById(data.id) 
				
			}
		}
	}



}
// @SubscribeMessage('typing')
// async sendTyping(client: Socket, body: any)
// {
// 	console.log("--------typingMessages-------------")
// 	let auth_token = client.handshake.auth.Authorization;
// 	if(auth_token !== "null" && auth_token !== "undefined" && auth_token)
// 	{
// 		const tokenInfo : any = this.jwtService.decode(auth_token);
// 		let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
// 		if(Object.keys(userInfo).length !== 0)
// 		{
// 			let sock = sockets.get(body[0])
// 			if(sock !== undefined)
// 			{
// 				if(body[1] !== '')
// 				{
// 					for(let ids of sock)
// 					{
// 						console.log("is emiting true to " ,ids.id)
// 						ids.emit("typing",true)
// 					}
// 				}
// 				else
// 				{
// 					for(let ids of sock)
// 					{
// 						console.log("is emiting false to " ,ids.id)
// 						ids.emit("typing",false)
// 					}
// 				}
// 			}
// 		}
// 	}
// 	console.log("--------------------------")

// }
/*SELECT "userName" from public."Users" Where "userName"
IN
(select "reciverId"
	FROM public."messages" WHERE "senderId" = 'mel-hamr') 
 OR "userName" IN (select "senderId"
	FROM public."messages" WHERE "reciverId" = 'mel-hamr') */

	/*
		messages : [
			1: {messge: ,userName: ,dateTime:}
		]
	*/