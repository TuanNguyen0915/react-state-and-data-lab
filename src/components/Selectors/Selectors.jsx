import './Selectors.css'

const Selectors = (props) => {

  function handleOnClick(clickedIdx){
    props.handleSelection(clickedIdx)
  }

  return (
    <div className="selector">
      {props.selections.map((selection, idx) =>
        <button className={selection?'selected':""}
          key={idx} onClick={()=>handleOnClick(idx)}
        >
          Button {idx + 1}
        </button>
      )}
    </div>
  )
}

export default Selectors