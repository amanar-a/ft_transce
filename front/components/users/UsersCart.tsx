import styles from "../../styles/users/usersCard.module.css";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import addUser from "../../public/images/usersImages/add-user.png";
import chatting from "../../public/images/usersImages/chatting.png";
import { useRouter } from "next/router";
import blockUser from "../../public/images/usersImages/block-user.png";
import accept from "../../public/images/usersImages/accept.png";
import reject from "../../public/images/usersImages/reject.png";
import { Loading, Grid } from "@nextui-org/react";

const UsersCart = (props: any) => {
  const [myData, setData] = useState<any>(props.data);
  const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setData(props.data);
  });
  const CheckIfFriend = (user: any) => {
    let friendstest = false;
    props.friends?.map((e: any) => {
      if (e.userName === user.userName) friendstest = true;
    });
    return friendstest;
  };
  const CheckIfInviteRecive = (user: any) => {
    let isInvite = false;
    props.usersRinvite?.map((e: any) => {
      if (e.userName === user.userName) isInvite = true;
    });
    return isInvite;
  };
  const CheckIfInviteSend = (user: any) => {
    let isInvite = false;
    props.usersSinvite?.map((e: any) => {
      if (e.userName === user.userName) isInvite = true;
    });
    return isInvite;
  };
  let checkFriends: boolean;
  let checkInviteRecive: boolean;
  let checkInviteSend: boolean;

  return (
    <>
      {props.data?.map((e: any | any[]) => {
        return (
          <div className={styles.userCard} key={Math.random()}>

			<div className={`${styles.imgContainer}`}>
			  {
				  isLoading ?
				  	<div className={styles.LoadingContainer}>
		  				<Grid><Loading type="points" /></Grid>
	 				</div>
			 		:
					 props.user?.userName === e.userName ?
              		<Link href={`/profile`} key={Math.random()}>
                		<img
                  		src={e.picture}
                  		width={80}
                  		height={80}
                  		className={`${styles.profileImage} ${e.isActive ? styles.userStatusOn : styles.userStatusOff
						}`}
						/>
              		</Link>
					  :
              		<Link href={`/users/${e.userName}`} key={Math.random()}>
                		<img
                  		src={e.picture}
                  		width={80}
                  		height={80}
                  		className={`${styles.profileImage} ${e.isActive ? styles.userStatusOn : styles.userStatusOff
						}`}
						/>
              		</Link>
				}
            </div>
            <div className={styles.userName}>
              <p>{e.userName}</p>
            </div>
            <div className={styles.icons}>
              {(checkFriends = CheckIfFriend(e))}
              {(checkInviteRecive = CheckIfInviteRecive(e))}
              {(checkInviteSend = CheckIfInviteSend(e))}
              <img
                src={addUser.src}
                alt="add"
                id={e.userName}
                className={
                  props.inBlock
                    ? styles.none
					: e.userName === props.user?.userName
					? styles.none
                    : checkInviteRecive
                    ? styles.none
                    : checkInviteSend
                    ? styles.none
                    : checkFriends
                    ? styles.none
                    : styles.addUserIcon
                }
                onClick={(e: any) => {
                  const data = { recipent_id: `${e.target.id}` };
                  axios
                    .post(
                      `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/friends/send`,
                      data,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                          )}`,
                        },
                      }
                    ).then((res) => {
						const data = { reciverName: `${e.target.id}`, type : "invit" };
                        props.socket?.emit("notification", data);
						props.socket?.emit("Refresh", [{userName: e.target.id}])
                    })
                    .catch(function (error) {
                      if (error.response) {
                        router.push({pathname :`/errorPage/${error.response.status}`})
                      }
                    });
                    props.socket.emit("Refresh",[{userName: e.target.id}]);
                  props.setUpdate(!props.update);
                }}
              />
              <img
                src={accept.src}
                alt="accept"
                id={e.userName}
                className={
                  props.inBlock
                    ? styles.none
                    : checkInviteRecive && !checkFriends
                    ? styles.acceptInvite
                    : styles.none
                }
                onClick={(e: any) => {
                  const data = {
                    sender_id: `${e.target.id}`,
                  };
                  axios
                    .post(
                      `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/friends/accept`,
                      data,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                          )}`,
                        },
                      }
                    )
                    .then((res) => {
                      props.socket.emit("Refresh",[{userName: e.target.id}]);
                    })
                    .catch(function (error) {
                      if (error.response) {
                        router.push({pathname :`/errorPage/${error.response.status}`})
                      }
                    });
                  props.setUpdate(!props.update);
                }}
              />
              <img
                src={reject.src}
                width={20}
                height={20}
                alt="reject"
                id={e.userName}
                className={
                  props.inBlock
                    ? styles.none
                    : checkInviteRecive && !checkFriends
                    ? styles.rejectInvite
                    : checkInviteSend
                    ? styles.rejectInvite
                    : styles.none
                }
                onClick={(e: any) => {
                  const data = { recipent_id: `${e.target.id}` };
                  axios
                    .post(
                      `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/friends/cancell`,
                      data,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                          )}`,
                        },
                      }
                    ).then((res) => {
                      props.socket.emit("Refresh",[{userName: e.target.id}]);
                    })
                    .catch(function (error) {
                      if (error.response) {
                        router.push({pathname :`/errorPage/${error.response.status}`})
                      }
                    });
                  props.setUpdate(!props.update);
                }}
              />
              {(checkInviteRecive = false)}
              {(checkInviteSend = false)}
              {(checkFriends = false)}
              <Link href={`/messages/${e.userName}`}>
                <img
                  src={chatting.src}
                  alt="chat"
                  className={props.inBlock ? styles.none : e.userName === props.user?.userName ? styles.none : styles.chattingIcon}
                />
              </Link>
              <img
                src={blockUser.src}
                alt="add"
                id={e.userName}
                className={props.inBlock ? styles.addUserIcon : styles.none}
                onClick={(e: any) => {
                  const data = { userName: `${e.target.id}` };
                  axios
                    .post(
                      `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/friends/unblock`,
                      data,{headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`,},})
                      .then((res:any) => {
                        props.setUpdate(!props.update);
                      })
                    .catch(function (error) {
                      if (error.response) {
                        router.push({pathname :`/errorPage/${error.response.status}`})
                      }
                    });
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UsersCart;
