

const ButtonRed = ({data, className}:{data:string, className?: string}) => {
  return (
      <button className={`min-w-2/5 block md:w-1/6 bg-button text-white rounded-xl px-3 py-2 my-3 ${className}`}>
          {data}
      </button>

  )
}

export default ButtonRed

// width: 225px;
// height: 50px;
// top: 411px;
// left: 158px;
// gap: 0px;
// opacity: 0px;
