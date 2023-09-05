const Protected = () => {
  return (
    <div className='border rounded m-3 p-3'>
        <h1>Protected Route</h1>
        <p>This shouldn&apos;t be visible unless logged in.</p>
    </div>
  )
}

export default Protected