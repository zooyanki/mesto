export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._rendererItems.unshift(item);
        this.render();
    } 

    render() {
        this._container.innerHTML = '';
        this._rendererItems.forEach((item) => {
            const element = this._renderer(item);
            this._container.append(element);
        });
    }
}