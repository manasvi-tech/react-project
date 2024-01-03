

const Content = () => {
    const name='Manasvi';
  const nameChangeHandler = () => {
    const names = ['Manasvi','Sanya','Dave'];
    const num = Math.floor(Math.random()*3);
    return names[num];
  }
  return (
    <main>
        <p>Hello {nameChangeHandler()}</p>
    </main>
  )
}

export default Content