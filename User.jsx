const users=[
    {name:"Ali", username:"AliiSh123", avatar:"./image/2.jfif"},
    {name:"Negar", username:"itsnegar_dd", avatar:"./image/7.jfif"},
    {name:"sara", username:"bigban_xoxo", avatar:"./image/3.jfif"},
    {name:"sepehr", username:"sepehr_rad", avatar:"./image/4.jfif"},
    {name:"ahoora" , username:"ahoora-vok", avatar:"./image/5.jfif"},
    {name:"sahar", username:"bigban_xoxo", avatar:"./image/1.jfif"},
    {name:"yasaman", username:"badGirl", avatar:"./image/8.jfif"},
]
function User({name,username,avatar="./image/6.png"}){
    return(
       <div className="user">
        <div className="user-avatar">
            <img src={avatar} alt=""/>
        </div>
        <div className="userinfo">
            <p>{name}</p>
            <p>{username}</p>
        </div>
       </div>
    )
}
function Userlist(){
    return(
<div>
    {users.map((item)=><User name={item.name} username={item.username} avatar={item.avatar}/>)}



    
  </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("app"));
root.render(
  
<Userlist/>
)




