export default class Iframe {
  constructor() {
    this._iframe = document.querySelector(".iframe");
  }

  _loadIframe() {
    const message = {
      token:
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IklTQlJBQ0hVIiwidXJtZDpPcmdhbml6YXRpb25JZCI6IjEzMTIzMTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpc2JyYWNodUBtdHMucnUiLCJ1cm1kOkZJTyI6IldpZGdldFRlc3QiLCJleHAiOjI1MzQwMjI5MDAwMCwiaXNzIjoiRGVhbGVyUG9ydGFsV2lkZ2V0In0.q9RxGLO-TchG6t2k1U7Lg0YMlhEmI28JPp92wxpJd7izH03zvWTc-YuC06XmEUCONxTnpiE3ekz61ky6CbIgEw",
      actions: [{ type: "close_widget", value: false }],
      address: "Энгельс",
    };

    this._iframe.contentWindow.postMessage(
      `${JSON.stringify(message)}`,
      `http://localhost:7000/`
    );
  }

  iframeOpen() {
    this._iframe.classList.add("iframe_open");
    this._iframe.src = "http://localhost:7000/";
    this._loadIframe();
  }
}
