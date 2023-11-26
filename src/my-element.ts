import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0


  @property({attribute: false}) 
  openDropdown: string |null = null;

  @state()
  private isOpen = false;

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }

  
  render() {
    return html`
      <div class="top-bar">
        <header class="topbar">
          <nav>
            <ul>
              <button class="mainbutton"><a class="text">Back to main</a></button>
              <button class="deletebutton"><a class="text">Delete Whiteboard</a></button>
            </ul>
          </nav>
        </header>
      </div>
      <div class="tool-bar">
        <header class="toolbar">
          <nav>
            <div class="parent-container">
              <ul class="icons">
              <button class="iconbutton"> 
                  <img src="images/select.png" alt="Select icon" />
                </button>
                <button class="iconbutton" @click="${() => 
                this.toggleDropdown()}">
                  <img src="images/pen.png" alt="Pen icon" />
                  <div class="dropdown-content" style="display: ${this.isOpen ? 'block' : 'none'}">
                  <div class = "dropdown-row">
                    <a href="#"><img src="images/stylus1.png" alt="Pen 1"></a>
                    <a href="#"><img src="images/stylus2.png" alt="Pen 2"></a>
                    <a href="#"><img src="images/stylus3.png" alt="Pen 3"></a>
                    <a href="#"><img src="images/stylus4.png" alt="Pen 4"></a>
                    <a href="#"><img src="images/blueCircle.png" alt="blue"></a>
                    <a href="#"><img src="images/greenCircle.png" alt="green"></a>
                    <a href="#"><img src="images/redCircle.png" alt="red"></a>
                    <a href="#"><img src="images/yellowCircle.png" alt="yellow"></a>
                  </div>
                  <div class="dropdown-secondRow">
                  <a href="#"><img src="images/penSize1.png" alt="XS"></a>
                  <a href="#"><img src="images/penSize2.png" alt="S"></a>
                  <a href="#"><img src="images/penSize3.png" alt="M"></a>
                  <a href="#"><img src="images/penSize4.png" alt="L"></a>
                  <a href="#"><img src="images/penSize5.png" alt="XL"></a>
                </div>
                </div>
                  
                </button>
                <button class="iconbutton">
                  <img src="images/eraser.png" alt="Eraser icon" />
                </button>
                <button class="iconbutton">
                  <img src="images/shape.png" alt="Shape icon" />
                </button>
                <button class="iconbutton">
                  <img src="images/sticker.png" alt="Sticker icon" />
                </button>
                <button class="iconbutton" @click="${() => 
                this.toggleDropdown()}">
                  <img src="images/image.png" alt="image icon" />
                </button>
              </ul>
            </div>  
          </nav>
        </header>
      </div>
      <div class="whiteboard">
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`


    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      display: flex;
      flex-direction: row;
    }

    .dropdown-secondRow{
      display: flex;
      flex-direction: row;
    }

    .secondDropdown{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: inline-flex
    }

    .dropdown-content a:hover {background-color: #ddd;}
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    nav ul {
      display: flex;
      gap: 1rem;
      margin: 0;
      padding: 15px;
      list-style: none;
    }

    .parent-container {
      display: flex;
      justify-content: center;
    }

    .icons {
      display: flex;
      gap: 10px;
      margin: -3px;
      padding: 0;
      list-style: none;
    }

    .top-bar {
      width: 100%;
      height: 60px;
      position: fixed;
      top: 0;
      left: 0;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .tool-bar {
      width: 100%;
      height: 50px;
      position: fixed;
      top: 60px;
      left: 0;
      background-color: lightgrey;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 999;
    }

    .whiteboard {
      width: 100%;
      height: 900px;
      position: fixed;
      top: 110px;
      left: 0;
      background-color: lightgray;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 998;
    }

    .mainbutton {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.2em 0.5em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #6495ED;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    .deletebutton {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.2em 0.5em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #DC143C;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    .iconbutton {
      border-radius: 0px;
      border: none;
      background-color: transparent;
    }


    .iconbutton img {
      width: 40px;
      height: 40px;
    }

    .text {
      color: white;
    }

    .text:hover {
      color:white;
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }

    
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement

  }
}
