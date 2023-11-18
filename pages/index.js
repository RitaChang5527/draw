import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div className="container">
        <section className="tools-board">
          <div className="row">
            <label className="title">Shapes</label>
            <div className="horizontal">
              <input className="option" type="radio" id="selection" />
              <label htmlFor="selection">Selection</label>
            </div>
            <div className="horizontal">
              <input className="option" type="radio" id="rectangle" />
              <label htmlFor="rectangle">Rectangle</label>
            </div>
            <div className="horizontal">
              <label>Filled</label>
              <input className="option" type="checkbox" />
            </div>

            <div className="horizontal">
              <input className="option" type="radio" id="line" />
              <label htmlFor="line">line</label>
            </div>
          </div>
          <div className="row">
            <label className="title">Options</label>
            <div className="horizontal">
              <input className="option" type="radio" id="brush" />
              <label htmlFor="brush">Brush</label>
            </div>
            <div className="horizontal">
              <input className="option" type="radio" id="text" />
              <label htmlFor="text">Text</label>
            </div>

            <div className="horizontal">
              <input
                className="option"
                type="radio"
                // id="eraser"
                // checked={tool === "eraser"}
                // onChange={() => setTool("eraser")}
              />
              <label htmlFor="eraser">Eraser</label>
            </div>
          </div>
          <div className="row">
            <label className="title">Colors</label>
            <div className="color-options">
              <input className="option-red" type="radio" />
              <input className="option-orange" type="radio" />
              <input className="option-green" type="radio" />
              <input className="option-black" type="radio" />
            </div>
          </div>
          <div className="row buttons">
            <button className="clear-canvas">undo</button>
            <button className="clear-canvas">redo</button>
            <button className="save-img">Save As Image</button>
          </div>
        </section>
        <section className="drawing-board">
          <canvas
            id="canvas"
            width={690}
            height={550}
            // onMouseDown={handleMouseDown}
            // onMouseMove={handleMouseMove}
            // onMouseUp={handleMouseUp}
          />
        </section>
      </div>
    </>
  );
}
export default HomePage;

