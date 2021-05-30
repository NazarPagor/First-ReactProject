import React from "react";
import s from "./User.module.css"

const Users = (props) => {
    //так не можна
    if(props.users.length === 0){
        const photoUrl = 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png';
        props.setUsers([
                {
                    id: 1,
                    photoUrl: photoUrl,
                    followed: false,
                    fullName: "Nazar",
                    status: "I am a boss",
                    location: {city: "Chernivtsi", country: "Ukraine"}
                },
                {
                    id: 2,
                    photoUrl: photoUrl,
                    followed: true,
                    fullName: "Sasha",
                    status: "I am a boss too",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: photoUrl,
                    followed: false,
                    fullName: "Andrew",
                    status: "I am a boss too",
                    location: {city: "New York", country: "USA"}
                },
            ],
        )
    }
    //
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt="photo" className={s.img}/>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>
                                {user.fullName}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.location.city}
                            </div>
                            <div>
                                {user.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }

        </div>
    )
}

export default Users;