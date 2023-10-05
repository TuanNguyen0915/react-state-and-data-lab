import './Circles.css'

const Circles = (props) => {
  function handleOnClick(clickedIdx){
    props.handleSelection(clickedIdx)
  }

  return (
    <div className="circles" >
      {props.selections.map((selection, idx) =>
        <div onClick={()=>handleOnClick(idx)} className={selection?"selected":""}
          key={idx}
        >
          {idx + 1}
        </div>  
      )}
    </div>
  )
}

export default Circles