import ReactDOM from 'react-dom'


const x = document.createElement('div');
document.body.appendChild(x);
export default Component => {
    ReactDOM.render(
        Component,
        x
    )
}