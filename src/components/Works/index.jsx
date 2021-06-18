import "./style.css"



const Works = () => {
    return (
        <div class="card-container">
  
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">todo-app</h3>
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">hugo CMS</h3>
        {/* <img class="card-img"
                    src={`${process.env.PUBLIC_URL}/yanamaste.png`}
                    alt="person picture"
                /> */}
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">chat-app</h3>
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">spotifake</h3>
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">piano</h3>
        <img class="card-img"
                    src={`${process.env.PUBLIC_URL}/piano.png`}
                    alt="person picture"
                />
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <h3 class="card-header">timer</h3>
        <p class="card-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="card-button">Read now</button>
      </div>
    </div>
  </div>

    )
}

export default Works
