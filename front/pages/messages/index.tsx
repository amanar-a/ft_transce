import styles from '../../styles/messages/index.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FriendsZone from '../../components/Messages/friendsZone';
import axios from 'axios';
const messages = (props: any) => {
    const [Status ,setStatus] = useState<boolean>(false);
    const [showFriends, setShowFriends] = useState<boolean>(true);
    const router = useRouter();
    const [friends, setFriends] = useState<any>();
    const [blockedUsers, setBlockedUsers] = useState<any>([]);
    useEffect(() => {
        axios.get("http://localhost:3001/message/getConntacts",
        {headers:{'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}}
        ).then((res) => {
            setFriends(res.data);
        }).catch(function (error){
            if (error.response){
                router.push({pathname :`/errorPage/${error.response.status}`})
            }
        })
    }, [])

    useEffect(() => {
        axios
          .get(
            `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/friends/block`,
            {
              headers: {
                Authorization: `Bearer ${
                  localStorage.getItem("accessToken") as string
                }`,
              },
            }
          )
          .then((res) => {
            setBlockedUsers(res.data.users_T_blocked);
          }).catch(function (error){
            if (error.response){
                router.push({pathname :`/errorPage/${error.response.status}`})
            }
        });
      }, []);
        return (
        <>
            <div className={styles.globaleContainer}>
                <button className={styles.tmp} onClick={(e:any) => {e.preventDefault();setStatus(!Status) ; props.socket?.emit("changeUserName", {userName : "bettachi-nigga"})}}>Status</button>
                <div className={styles.container}>
                    <FriendsZone data={friends} Info={friends} status={Status} show={showFriends} setShow={setShowFriends} blockedusers={blockedUsers}/>
                    <div className={styles.indexWelcomeZone}>
                        <h1 className={styles.indexWelcomeSentence}>Welcome To ft_transcendance Chat</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default messages;