const { loadImage, createCanvas, GlobalFonts } = require("@napi-rs/canvas");

GlobalFonts.registerFromPath(
  require("@canvas-fonts/helveticaneue"),
  "Helvetica"
);

class BaliBuildingLocation {
  async getImageNorthSide1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtara.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    const jarak = ((3 * footLength + sideFootLength) / 100).toFixed(1) + " m";
    context.fillText(
      jarak,
      630,
      280
    );

    // bale daja -> tembok : Uma
    const jarak1 = ((16 * footLength + sideFootLength) / 100).toFixed(1) + " m";
    context.fillText(
      jarak1,
      260,
      300
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      520
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      215
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      390
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      220,
      730
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      700
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      365,
      850
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtara.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    const jarak = ((11 * footLength + sideFootLength) / 100).toFixed(1) + " m";    
    context.fillText(
      jarak,
      630,
      280
    );

    // bale daja -> tembok : Uma
    const jarak1 = ((24 * footLength + sideFootLength) / 100).toFixed(1) + " m";    
    context.fillText(
      jarak1,
      260,
      300
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      520
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      215
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      390
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      220,
      730
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      700
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      365,
      850
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSide3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtara.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    const jarak = ((19 * footLength + sideFootLength) / 100).toFixed(1) + " m";    
    context.fillText(
      jarak,
      630,
      280
    );

    // bale daja -> tembok : Uma
    const jarak1 = ((32 * footLength + sideFootLength) / 100).toFixed(1) + " m";    
    context.fillText(
      jarak1,
      260,
      300
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      520
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      215
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      390
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      220,
      730
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      700
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      365,
      850
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSideNorthBali1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtaraBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      820
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      840
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      735
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      600
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      925
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      750
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      210,
      450
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      460
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      300
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSideNorthBali2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtaraBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      820
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      840
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      735
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      600
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      925
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      750
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      210,
      450
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      460
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      300
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageNorthSideNorthBali3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataUtaraBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      820
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      840
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      735
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      480,
      600
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      925
    );

    // bale daja -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      750
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      210,
      450
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      460
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      300
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatan.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      220
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      220
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      550,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      610
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      600
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      325
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      140
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      190,
      125
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatan.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      220
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      220
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      550,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      610
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      600
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      325
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      140
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      190,
      125
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSide3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatan.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      220
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      220
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      360
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      550,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      610
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      600
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      325
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      140
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      190,
      125
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSideNorthBali1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatanBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      720
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      250,
      740
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      380
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      480
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      180
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      340
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      655
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      830
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      840
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSideNorthBali2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatanBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      720
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      250,
      740
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      380
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      480
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      180
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      340
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      655
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      830
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      840
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageSouthSideNorthBali3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1238;
    const height = 1068;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataSelatanBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      720
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      250,
      740
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      380
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      460,
      480
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      360,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      180
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      340
    );

    // bale dauh -> bale daja : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      655
    );

    // bale daje -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      465,
      830
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      840
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSide1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimur.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      630,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      180
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      280
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      370,
      690
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      410
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      195,
      90
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      100
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSide2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimur.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      630,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      180
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      280
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      370,
      690
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      410
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      195,
      90
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      100
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSide3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimur.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      630,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      180
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      330,
      280
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      340,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      370,
      690
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      230,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      410
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      195,
      90
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      450,
      100
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSideNorthBali1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimurBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      710
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      680
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      610
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      390,
      310
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      190
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      240,
      310
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      450
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      215,
      780
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      770
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSideNorthBali2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimurBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      710
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      680
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      610
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      390,
      310
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      190
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      240,
      310
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      450
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      215,
      780
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      770
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageEastSideNorthBali3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataTimurBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      710
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      320,
      680
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      350,
      610
    );

    // bale daje -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      390,
      310
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      190
    );

    // bale dauh -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      240,
      310
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      340
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      470,
      450
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      215,
      780
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      770
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBarat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      955,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      620,
      190
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      780,
      95
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      530,
      85
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      565,
      570
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)}`,
      660,
      530
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      690
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      655,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      830,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBarat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      955,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      620,
      190
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      780,
      95
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      530,
      85
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      565,
      570
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)}`,
      660,
      530
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      690
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      655,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      830,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSide3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBarat.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      955,
      170
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      620,
      190
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      780,
      95
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      530,
      85
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      565,
      570
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)}`,
      660,
      530
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      690
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      655,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      830,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSideNorthBali1(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBaratBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((3 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      960,
      650
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      640
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((8 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      800,
      745
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      755
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((6 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      320
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      720,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      970,
      220
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      675,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      835,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      790,
      415
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSideNorthBali2(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBaratBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((11 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      960,
      650
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      640
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((16 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      800,
      745
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      755
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((14 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      320
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      720,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      970,
      220
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      675,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      835,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      790,
      415
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getImageWestSideNorthBali3(footLength, sideFootLength, landLength, landWidth, url) {
    const width = 1406;
    const height = 900;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    let urlImg = "/images/tataBaratBU.png";
    const image = await loadImage(`${url}${urlImg}`);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, width, height);

    context.fillStyle = "#000000";
    context.font = "bold 16pt Helvetica";

    // merajan -> bale daja : Guru
    context.fillText(
      `${((19 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      960,
      650
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((32 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      640
    );

    // bale daja -> tembok : Uma
    context.fillText(
      `${((24 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      800,
      745
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      755
    );

    // dapur -> bale dauh : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      570,
      320
    );

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      720,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      970,
      220
    );

    // bale daje -> bale dauh : Kala
    context.fillText(
      `${((31 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      675,
      580
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      835,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      790,
      415
    );

    const imgBuffer = canvas.toBuffer("image/png");

    return imgBuffer.toString("base64");
  }

  async getBuildingLocation(
    direction,
    footLength,
    sideFootLength,
    orientation,
    landLength,
    landWidth,
    url
  ) {
    if (
      ["utara", "selatan", "timur", "barat"].includes(direction) &&
      ["baliutara", "baliselatan"].includes(orientation) &&
      landLength < 10 &&
      landWidth < 10
    ) {
      return { error: "Luas tanah minimal 10m x 10m" }; }
    else if (direction == "utara" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "utara" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "utara" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "utara" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageNorthSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "utara" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageNorthSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "utara" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageNorthSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "timur" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageEastSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "timur" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageEastSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "timur" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageEastSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "timur" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageEastSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "timur" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageEastSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "timur" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageEastSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "barat" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageWestSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "barat" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageWestSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "barat" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageWestSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "barat" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageWestSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "barat" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageWestSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "barat" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageWestSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "selatan" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "selatan" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "selatan" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "selatan" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageSouthSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    }
    else if (direction == "selatan" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageSouthSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    }
    else {
      return {
        bytesImg: await this.getImageSouthSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    }
   }
 }


const baliBuildingLocation = new BaliBuildingLocation();
module.exports = baliBuildingLocation;
