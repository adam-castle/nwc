
import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class LaketreeTabs extends LitElement {

  static properties = {
    color: {type: String},
    height: {type: Number },
    value: {type: Number },
    tabs: {type: String},
  };

  static getMetaConfig() {
    return {
      controlName: 'Laketree Tabs',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        color: {
          type: 'string',
          title: 'Colour'
        }
      }
    };
  }

  constructor() {
    super();
    this.tabs = "t1,t2";
  }

tabClicked(e)
{
 debugger;
}


    render() {
    
        var tabList = this.tabs.split(',');
        
        return html`
            <style>

    .tab-Container {
        border-bottom: 1px gray solid;

    }

    .tab {
        color: red;
        border: 1px gray solid;
        min-width: 50px;
        display: inline-block;
        padding: 10px;
        background: #f0f0f0;
        cursor: pointer;
    }
    
    .tab-selected { 
      background: white;
      border-bottom: 0;
      cursor: default
    }
            </style>
            
            <div class="tab-Container">
            ${tabList.map((tab) => html`
              <span class="tab" @click=${this.tabClicked} >${tab}</span>
              `)}
            </div>`;
      }
    


}

const elementName = 'laketree-tabs';
customElements.define(elementName, LaketreeTabs);