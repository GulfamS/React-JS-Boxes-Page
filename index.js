const Box = props => {
  const {className, boxText} = props
  return (
    <div className={`box ${className}`}>
      <p className='box-content'>{boxText}</p>
    </div>
  )
}

const element = (
  <div>
    <h1 className='box-heading'>Boxes</h1>
    <div className='box-container'>
      <Box className='box1' boxText='Small' />
      <Box className='box2' boxText='Medium' />
      <Box className='box3' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
