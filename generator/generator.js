


let paperpath;
let episodepath;
let rect;

paper.install(window);
window.onload = function() {

    paper.setup('myCanvas');
    var raster = new Raster('bg');
    raster.position = paper.view.center;
    rect = raster.bounds;

    




}


function addText(text){
    opentype.load("OpenSans-SemiBold.ttf", function(err, f) {
        if(paperpath){
            paperpath.remove();
        }

		font = f;

		var amount, glyph, ctx, x, y, fontSize;
		if (err) {
			console.log(err.toString());
			return;
		}

		let textwidth = font.getAdvanceWidth(text, 500);
        paperpath = paper.project.importSVG(font.getPath(text,rect.bottomLeft.x+580,rect.bottomLeft.y-120, 85).toSVG());
        paperpath.fillColor = 'white';
	});
}

function addEpisode(text){
    opentype.load("OpenSans-SemiBold.ttf", function(err, f) {
        if(episodepath){
            episodepath.remove();
        }

		font = f;

		var amount, glyph, ctx, x, y, fontSize;
		if (err) {
			console.log(err.toString());
			return;
		}

		let textwidth = font.getAdvanceWidth(text, 500);
        episodepath = paper.project.importSVG(font.getPath(text,rect.bottomLeft.x+560,rect.bottomLeft.y-240, 115).toSVG());
        episodepath.fillColor = 'white';
	});
}

function downloadPNG(){
    var canvas = document.getElementById("myCanvas");
    var downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png;base64");
    downloadLink.download = 'thumbnail.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

