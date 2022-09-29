/* eslint-disable import/no-anonymous-default-export */
export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #212121;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

.loaderani{
    animation: load 2s linear infinite;
    position: relative;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    overflow: hidden;
}
.loader {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 5px solid #e74c3c;
    position: relative;
    overflow: hidden;
  }
  
  .loaderb, .loadera {
    content: ' ';
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
  }
  
  .loaderb {
    content: ' ';
    display: block;
    position: absolute;
    border-top: 5px solid #e67e22;
    transform: rotate(120deg);
  }
  
  .loadera {
    content: ' ';
    display: block;
    position: absolute;
    border-top: 5px solid #3498db;
    transform: rotate(240deg);
  }
  
  .loader span {
    position: absolute;
    font-size: small;
    width: 100px;
    height: 100px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    animation: a2 2s linear infinite;
  }
  
  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes a2 {
    to {
      transform: rotate(-360deg);
    }
  }
  `;