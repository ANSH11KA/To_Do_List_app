* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #153677, #4e085f);
  padding: 10px;
}
.todo-app {
  width: 100%;
  max-width: 540px;
  background: #fff;
  margin: 100px auto 20px;
  padding: 40px 30px 70px;
  border-radius: 10px;
}
.todo-app h2 {
  color: #002765;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.todo-app h2 img {
  width: 30px;
  margin-left: 10px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #edeef0;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
}

input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px;
  font-weight: 14px;
}
button {
  border: none;
  outline: none;
  padding: 16px 50px;
  background: #ff5945;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 40px;
}
ul li {
  list-style: none;
  font-size: 17px;
  padding: 12px 8px 12px 50px;
  user-select: none;
  cursor: pointer;
  position: relative;
}
ul li::before {
  content: "";
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-image: url(images/unchecked.png);
  background-size: cover;
  background-position: center;
  top: 12px;
  left: 8px;
}
ul li.checked {
  color: #555;
  text-decoration: line-through;
}
ul li.checked::before {
  background-image: url(images/checked.png);
}

ul li span {
  position: absolute;
  right: 0;
  top: 5px;
  width: 40px;
  height: 40px;
  font-size: 22px;
  color: #555;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
}

ul li span:hover {
  background: #d0d2d8;
}
