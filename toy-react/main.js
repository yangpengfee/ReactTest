import { createElement, Compment, render } from './toy-react.js';

class MyCompment extends Compment {
    render() {
        return <div>
            <h1>my compment</h1>
            <div>{this.children}</div>
        </div>
    }

}
render(<MyCompment class="a" id="c" >
    <div>abc</div>
    <div></div>
    <div></div>
</MyCompment>, document.body)