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
      650,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      530
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
      330,
      390
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      255,
      750
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((4 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      370
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      450
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
      650,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      530
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
      330,
      390
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      255,
      750
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

        // bale daja -> pengijeng : Yama
    context.fillText(
      `${((12 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      370
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      450
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
      650,
      280
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      490,
      665
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      530
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
      330,
      390
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      380,
      780
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      255,
      750
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      170,
      170
    );

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((20 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      640,
      370
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      450
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
      830
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      485
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      580
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

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      410,
      410
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      440
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((7 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      730
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
      830
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      485
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      580
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

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      410,
      410
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      440
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((15 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      730
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
      830
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      515,
      485
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      580
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

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      410,
      410
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      290,
      440
    );

    // penunggun karang -> tembok : Kala
    context.fillText(
      `${((23 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      200,
      940
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      730
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
      670,
      190
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      560
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      690
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      660
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

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((4 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      660,
      290
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      710,
      370
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
      670,
      190
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      560
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      690
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      660
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

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((12 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      660,
      290
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      710,
      370
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
      670,
      190
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      560
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      580,
      460
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      690
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
      660
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

        // bale daja -> pengijeng : Yama
    context.fillText(
      `${((20 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      660,
      290
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      710,
      370
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
      650,
      750
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      400
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      490
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
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

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      630
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
      650,
      750
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      400
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      490
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
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

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      630
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
      650,
      750
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      510,
      400
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      490
    );

    // bale daja -> dapur : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      400,
      300
    );

    // bale daja -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      280,
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

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      680,
      630
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
      640,
      150
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
      400,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      560
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      500
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      400
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

        // bale daja -> pengijeng : Yama
    context.fillText(
      `${((4 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      250
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      320
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
      640,
      150
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
      400,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      560
    );


    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      500
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      400
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

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((12 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      250
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      320
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
      640,
      150
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
      400,
      610
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      270,
      560
    );



    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      500,
      500
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      560,
      400
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

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((20 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      650,
      250
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      320
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
      660,
      690
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
      410,
      280
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      300,
      350
    );

    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((5 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      370
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      440
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

        // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      580
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
      660,
      690
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
      410,
      280
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      300,
      350
    );



    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((13 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      370
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      440
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

     // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      580
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
      660,
      690
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
      410,
      280
    );

    // bale daje -> jineng : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      300,
      350
    );



    // bale daje -> bale kelod : Rudra
    context.fillText(
      `${((21 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      520,
      370
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      440
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

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      690,
      580
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
      965,
      140
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


    // dapur -> bale daja : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      725,
      570
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      600,
      570
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
      820,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((9 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((4 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      980,
      240
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1020,
      320
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
      965,
      140
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

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)}`,
      725,
      570
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      600,
      570
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
      820,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((17 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((12 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      980,
      240
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1020,
      320
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
      965,
      140
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

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      725,
      570
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      600,
      570
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
      820,
      330
    );

    // bale kauh -> bale kangin : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      890,
      390
    );

    // bale daja -> pengijeng : Yama
    context.fillText(
      `${((20 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      980,
      240
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1020,
      320
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
      970,
      650
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

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((22 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      725,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((25 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      290
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
      950,
      415
    );

    // bale daja -> bale dangin : Indra
    context.fillText(
      `${((10 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1000,
      550
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
      970,
      650
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

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((30 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      725,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((33 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      290
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
      950,
      415
    );

        // bale daja -> bale dangin : Indra
    context.fillText(
      `${((18 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1000,
      550
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
      970,
      650
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

    // dapur -> bale daja : Brahma
    context.fillText(
      `${((38 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      725,
      310
    );

    // jineng -> bale daja : Sri
    context.fillText(
      `${((41 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      590,
      290
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
      950,
      415
    );

        // bale daja -> bale dangin : Indra
    context.fillText(
      `${((26 * footLength + sideFootLength) / 100).toFixed(1)} m`,
      1000,
      550
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
      ["north", "south", "east", "west"].includes(direction) &&
      ["baliutara", "baliselatan"].includes(orientation) &&
      landLength < 10 &&
      landWidth < 10
    ) {
      return { error: "Luas tanah minimal 10m x 10m" }; }
    else if (direction == "north" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "north" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "north" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageNorthSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "north" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageNorthSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "north" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageNorthSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "north" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageNorthSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "east" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageEastSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "east" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageEastSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "east" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageEastSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "east" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageEastSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "east" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageEastSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "east" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageEastSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "west" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageWestSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "west" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageWestSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "west" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageWestSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "west" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageWestSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "west" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageWestSide2(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "west" && orientation == "baliselatan" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageWestSide3(footLength, sideFootLength, landLength, landWidth, url),
      };
    } else if (direction == "south" && orientation == "baliutara" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali1(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "south" && orientation == "baliutara" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali2(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "south" && orientation == "baliutara" && landLength >= 17 && landLength <= 1000 && landWidth >= 17 && landWidth <= 1000) {
      return {
        bytesImg: await this.getImageSouthSideNorthBali3(
          footLength,
          sideFootLength,
          landLength,
          landWidth,
          url
        ),
      };
    } else if (direction == "south" && orientation == "baliselatan" && landLength >= 10 && landLength <= 12 && landWidth >= 10 && landWidth <= 12) {
      return {
        bytesImg: await this.getImageSouthSide1(footLength, sideFootLength, landLength, landWidth, url),
      };
    }
    else if (direction == "south" && orientation == "baliselatan" && landLength >= 13 && landLength <= 16 && landWidth >= 13 && landWidth <= 16) {
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
