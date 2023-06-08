import wayland from './assets/wayland.jpg'
import melissa from './assets/melissa.jpg'
import Member from "./components/Member";


export default function Team() {
  return (
    //"C:\Users\19292\Downloads\wayland.jpg"
    <div className=" bg-teamColor flex gap-4 justify-center p-3">
      <Member name = "Melissa MK Armstrong" github ="https://github.com/mkarmstr" linkedIn="https://www.linkedin.com/in/mkarmstr/" source = {melissa}/>
      <Member name = "Wayland Singh" github ="https://github.com/waylandsingh" linkedIn="https://www.linkedin.com/in/wayland-singh/" source = {wayland} />
      <Member name = "Sun JIn Kim" github ="https://github.com/sjin-k"  source = "https://ca.slack-edge.com/T04N3N45ST1-U04TN1WN9HP-29a2ca364091-512"/>
      <Member name = "Faisal Rahman" github ="https://github.com/sjin-k" linkedIn="https://www.linkedin.com/in/faisal-rahman-348a22203/"  source = "https://ca.slack-edge.com/T04N3N45ST1-U04UTR032M9-ef18e8dd1fde-512" />
      
    </div>
  )
}
//<Member source = "https://images.unsplash.com/photo-1684154629163-69283a01c3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" />
//<Member source = "https://images.unsplash.com/photo-1684154629163-69283a01c3dc?ixlib=rb-//4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" />
//<Member source = "https://ca.slack-edge.com/T04N3N45ST1-U04UTR032M9-ef18e8dd1fde-512" />