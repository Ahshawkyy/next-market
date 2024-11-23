import './loading.css'
const Loading = () => {
  return (
    <div style={{    display: "flex" ,
    
          justifyContent: "center",
          marginBlock: "9rem"}}>
            
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>


          </div>
  )
}

export default Loading