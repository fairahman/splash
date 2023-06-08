
import gif from '../assets/fathom_demo_quick.gif';
export default function Demo() {
  return (
    <div className=" bg-demoColor text-white hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={gif} className="max-w-4xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Compare Stats</h1>
      <p className="py-6 text-xl" > Take snapshots of your cluster metrics and compare the current state of your cluster to any previous saved snapshot!  </p>
      
    </div>
  </div>
</div>
  )
}
