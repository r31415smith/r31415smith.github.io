function backView(canvas){

var ctx = canvas.getContext("2d");

 // background/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(769.7, 1.1);
      ctx.lineTo(567.0, 1.1);
      ctx.lineTo(567.0, 490.0);
      ctx.lineTo(769.7, 490.0);
      ctx.lineTo(769.7, 1.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(242, 242, 242)";
      ctx.fill();

      // background/Path
      ctx.beginPath();
      ctx.moveTo(910.0, 25.0);
      ctx.lineTo(0.0, 25.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(910.0, 0.0);
      ctx.lineTo(910.0, 25.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();

      // background/Path
      ctx.beginPath();
      ctx.moveTo(754.0, 489.5);
      ctx.lineTo(587.3, 489.5);
      ctx.lineTo(587.3, 126.9);
      ctx.lineTo(754.0, 126.9);
      ctx.lineTo(754.0, 489.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 229, 229)";
      ctx.fill();

      // background/Path
      ctx.beginPath();
      ctx.moveTo(754.0, 36.1);
      ctx.lineTo(587.3, 36.1);
      ctx.lineTo(587.3, 105.7);
      ctx.lineTo(754.0, 105.7);
      ctx.lineTo(754.0, 36.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(209, 221, 240)";
      ctx.fill();

      // background/Waves
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillStyle = "rgb(45, 48, 144)";
      ctx.fillText("Waves", 69.3, 19.5);

      // background/Time s
//      ctx.font = "Bold 21.0px 'Arial'";
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillStyle = "rgb(0, 0, 0)";
//      ctx.fillText("Time (s)", 668.3, 94.8);
      ctx.fillText("Time", 600, 60);
      ctx.font = "18.0px 'Arial'";
      ctx.fillText("s", 710, 85);

      // background/wavelength cm
//      ctx.font = "Bold 18.0px 'Arial'";
      ctx.font = "18.0px 'Arial'";
//      ctx.fillText("wavelength (cm)", 606.3, 238.7);
      ctx.fillText("Wavelength", 600, 190);
      ctx.fillText("cm", 710, 215);

      // background/frequency Hz
//      ctx.fillText("frequency (Hz)", 618.3, 301.8);
      ctx.fillText("Frequency", 600, 255);
      ctx.fillText("Hz", 710, 280);

      // background/phase deg
//      ctx.fillText("phase (deg)", 643.7, 363.8);
      ctx.fillText("Phase", 600, 320);
      ctx.fillText("deg", 710, 345);

      // background/amplitude cm
//      ctx.fillText("amplitude (cm)", 618.3, 426.5);
      ctx.fillText("Amplitude", 600, 385);
      ctx.fillText("cm", 710, 410);


      // background/amplitude cm
//      ctx.fillText("score ( % )", 650.3, 482.5);
      ctx.fillText("Score", 600, 450);
      ctx.fillText("%", 710, 475);

      // background/1 frame
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("1 frame", 130, 470);

      // background/1 frame
      ctx.fillText("1 frame", 305, 470);

      // background/pause
      ctx.fillText("Play/Pause", 202, 470);

      // background/Wavecontrols
//      ctx.fillText("Wave", 597.7, 151.7);
//      ctx.fillText("controls", 597.7, 176.9);
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillText("Wave controls", 600, 155);

      // background/Group

      // background/Group/Group
      ctx.save();

      // background/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(3.8, 21.1);
      ctx.lineTo(5.0, 21.2);
      ctx.bezierCurveTo(4.8, 21.7, 4.6, 22.0, 4.3, 22.2);
      ctx.bezierCurveTo(4.0, 22.4, 3.6, 22.5, 3.1, 22.5);
      ctx.bezierCurveTo(2.3, 22.5, 1.8, 22.3, 1.4, 21.8);
      ctx.bezierCurveTo(1.1, 21.4, 1.0, 20.9, 1.0, 20.3);
      ctx.bezierCurveTo(1.0, 19.6, 1.2, 19.0, 1.6, 18.6);
      ctx.bezierCurveTo(1.9, 18.2, 2.4, 18.0, 3.0, 18.0);
      ctx.bezierCurveTo(3.6, 18.0, 4.1, 18.2, 4.5, 18.7);
      ctx.bezierCurveTo(4.9, 19.1, 5.0, 19.7, 5.0, 20.6);
      ctx.lineTo(2.2, 20.6);
      ctx.bezierCurveTo(2.2, 20.9, 2.3, 21.2, 2.4, 21.4);
      ctx.bezierCurveTo(2.6, 21.6, 2.8, 21.7, 3.1, 21.7);
      ctx.bezierCurveTo(3.3, 21.7, 3.4, 21.6, 3.5, 21.5);
      ctx.bezierCurveTo(3.7, 21.4, 3.8, 21.3, 3.8, 21.1);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(3.9, 19.9);
      ctx.bezierCurveTo(3.9, 19.6, 3.8, 19.3, 3.6, 19.2);
      ctx.bezierCurveTo(3.5, 19.0, 3.3, 18.9, 3.0, 18.9);
      ctx.bezierCurveTo(2.8, 18.9, 2.6, 19.0, 2.4, 19.2);
      ctx.bezierCurveTo(2.3, 19.3, 2.2, 19.6, 2.2, 19.9);
      ctx.lineTo(3.9, 19.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(7.2, 22.4);
      ctx.lineTo(6.1, 22.4);
      ctx.lineTo(6.1, 18.1);
      ctx.lineTo(7.1, 18.1);
      ctx.lineTo(7.1, 18.7);
      ctx.bezierCurveTo(7.3, 18.4, 7.5, 18.3, 7.6, 18.2);
      ctx.bezierCurveTo(7.8, 18.1, 7.9, 18.0, 8.1, 18.0);
      ctx.bezierCurveTo(8.4, 18.0, 8.6, 18.1, 8.9, 18.2);
      ctx.lineTo(8.5, 19.2);
      ctx.bezierCurveTo(8.3, 19.1, 8.1, 19.0, 8.0, 19.0);
      ctx.bezierCurveTo(7.8, 19.0, 7.7, 19.1, 7.6, 19.2);
      ctx.bezierCurveTo(7.4, 19.3, 7.4, 19.4, 7.3, 19.7);
      ctx.bezierCurveTo(7.2, 19.9, 7.2, 20.4, 7.2, 21.1);
      ctx.lineTo(7.2, 22.4);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(9.4, 22.7);
      ctx.lineTo(10.7, 22.9);
      ctx.bezierCurveTo(10.7, 23.0, 10.8, 23.1, 10.9, 23.2);
      ctx.bezierCurveTo(11.0, 23.3, 11.1, 23.3, 11.4, 23.3);
      ctx.bezierCurveTo(11.7, 23.3, 11.9, 23.3, 12.0, 23.2);
      ctx.bezierCurveTo(12.1, 23.1, 12.2, 23.0, 12.3, 22.9);
      ctx.bezierCurveTo(12.3, 22.8, 12.3, 22.6, 12.3, 22.4);
      ctx.lineTo(12.3, 21.7);
      ctx.bezierCurveTo(12.0, 22.2, 11.5, 22.4, 11.0, 22.4);
      ctx.bezierCurveTo(10.4, 22.4, 10.0, 22.2, 9.7, 21.7);
      ctx.bezierCurveTo(9.4, 21.3, 9.3, 20.8, 9.3, 20.2);
      ctx.bezierCurveTo(9.3, 19.5, 9.4, 19.0, 9.8, 18.6);
      ctx.bezierCurveTo(10.1, 18.2, 10.6, 18.0, 11.1, 18.0);
      ctx.bezierCurveTo(11.6, 18.0, 12.0, 18.3, 12.4, 18.7);
      ctx.lineTo(12.4, 18.1);
      ctx.lineTo(13.5, 18.1);
      ctx.lineTo(13.5, 22.0);
      ctx.bezierCurveTo(13.5, 22.5, 13.4, 22.9, 13.3, 23.1);
      ctx.bezierCurveTo(13.2, 23.4, 13.1, 23.6, 13.0, 23.7);
      ctx.bezierCurveTo(12.8, 23.9, 12.6, 24.0, 12.4, 24.0);
      ctx.bezierCurveTo(12.1, 24.1, 11.8, 24.2, 11.4, 24.2);
      ctx.bezierCurveTo(10.7, 24.2, 10.2, 24.0, 9.9, 23.8);
      ctx.bezierCurveTo(9.6, 23.5, 9.4, 23.2, 9.4, 22.8);
      ctx.bezierCurveTo(9.4, 22.8, 9.4, 22.8, 9.4, 22.7);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(10.4, 20.2);
      ctx.bezierCurveTo(10.4, 20.6, 10.5, 21.0, 10.7, 21.2);
      ctx.bezierCurveTo(10.9, 21.4, 11.1, 21.5, 11.3, 21.5);
      ctx.bezierCurveTo(11.6, 21.5, 11.9, 21.4, 12.0, 21.2);
      ctx.bezierCurveTo(12.2, 21.0, 12.3, 20.6, 12.3, 20.2);
      ctx.bezierCurveTo(12.3, 19.8, 12.2, 19.4, 12.1, 19.2);
      ctx.bezierCurveTo(11.9, 19.0, 11.6, 18.9, 11.4, 18.9);
      ctx.bezierCurveTo(11.1, 18.9, 10.9, 19.0, 10.7, 19.2);
      ctx.bezierCurveTo(10.5, 19.4, 10.4, 19.7, 10.4, 20.2);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(14.5, 20.2);
      ctx.bezierCurveTo(14.5, 19.8, 14.6, 19.5, 14.8, 19.1);
      ctx.bezierCurveTo(14.9, 18.8, 15.2, 18.5, 15.6, 18.3);
      ctx.bezierCurveTo(15.9, 18.1, 16.3, 18.0, 16.7, 18.0);
      ctx.bezierCurveTo(17.3, 18.0, 17.9, 18.2, 18.3, 18.7);
      ctx.bezierCurveTo(18.7, 19.1, 18.9, 19.6, 18.9, 20.3);
      ctx.bezierCurveTo(18.9, 20.9, 18.7, 21.5, 18.3, 21.9);
      ctx.bezierCurveTo(17.9, 22.3, 17.3, 22.5, 16.7, 22.5);
      ctx.bezierCurveTo(16.3, 22.5, 15.9, 22.4, 15.6, 22.3);
      ctx.bezierCurveTo(15.2, 22.1, 14.9, 21.8, 14.8, 21.5);
      ctx.bezierCurveTo(14.6, 21.1, 14.5, 20.7, 14.5, 20.2);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(15.6, 20.3);
      ctx.bezierCurveTo(15.6, 20.7, 15.7, 21.0, 16.0, 21.3);
      ctx.bezierCurveTo(16.2, 21.5, 16.4, 21.6, 16.7, 21.6);
      ctx.bezierCurveTo(17.0, 21.6, 17.2, 21.5, 17.4, 21.3);
      ctx.bezierCurveTo(17.6, 21.0, 17.7, 20.7, 17.7, 20.3);
      ctx.bezierCurveTo(17.7, 19.8, 17.6, 19.5, 17.4, 19.3);
      ctx.bezierCurveTo(17.2, 19.1, 17.0, 19.0, 16.7, 19.0);
      ctx.bezierCurveTo(16.4, 19.0, 16.2, 19.1, 16.0, 19.3);
      ctx.bezierCurveTo(15.7, 19.5, 15.6, 19.8, 15.6, 20.3);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(19.9, 18.1);
      ctx.lineTo(21.0, 18.1);
      ctx.lineTo(21.0, 18.8);
      ctx.bezierCurveTo(21.1, 18.5, 21.3, 18.4, 21.6, 18.2);
      ctx.bezierCurveTo(21.8, 18.1, 22.1, 18.0, 22.3, 18.0);
      ctx.bezierCurveTo(22.8, 18.0, 23.3, 18.2, 23.6, 18.6);
      ctx.bezierCurveTo(24.0, 19.0, 24.1, 19.5, 24.1, 20.2);
      ctx.bezierCurveTo(24.1, 21.0, 24.0, 21.5, 23.6, 21.9);
      ctx.bezierCurveTo(23.3, 22.3, 22.8, 22.5, 22.3, 22.5);
      ctx.bezierCurveTo(22.1, 22.5, 21.9, 22.5, 21.7, 22.4);
      ctx.bezierCurveTo(21.5, 22.3, 21.3, 22.1, 21.1, 21.9);
      ctx.lineTo(21.1, 24.1);
      ctx.lineTo(19.9, 24.1);
      ctx.lineTo(19.9, 18.1);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(21.1, 20.2);
      ctx.bezierCurveTo(21.1, 20.7, 21.2, 21.0, 21.4, 21.3);
      ctx.bezierCurveTo(21.6, 21.5, 21.8, 21.6, 22.1, 21.6);
      ctx.bezierCurveTo(22.3, 21.6, 22.5, 21.5, 22.7, 21.3);
      ctx.bezierCurveTo(22.9, 21.1, 23.0, 20.7, 23.0, 20.3);
      ctx.bezierCurveTo(23.0, 19.8, 22.9, 19.5, 22.7, 19.3);
      ctx.bezierCurveTo(22.5, 19.0, 22.3, 18.9, 22.0, 18.9);
      ctx.bezierCurveTo(21.8, 18.9, 21.5, 19.0, 21.3, 19.2);
      ctx.bezierCurveTo(21.2, 19.5, 21.1, 19.8, 21.1, 20.2);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(27.7, 21.1);
      ctx.lineTo(28.8, 21.2);
      ctx.bezierCurveTo(28.7, 21.7, 28.5, 22.0, 28.1, 22.2);
      ctx.bezierCurveTo(27.8, 22.4, 27.4, 22.5, 27.0, 22.5);
      ctx.bezierCurveTo(26.2, 22.5, 25.7, 22.3, 25.3, 21.8);
      ctx.bezierCurveTo(25.0, 21.4, 24.9, 20.9, 24.9, 20.3);
      ctx.bezierCurveTo(24.9, 19.6, 25.1, 19.0, 25.4, 18.6);
      ctx.bezierCurveTo(25.8, 18.2, 26.3, 18.0, 26.9, 18.0);
      ctx.bezierCurveTo(27.5, 18.0, 28.0, 18.2, 28.4, 18.7);
      ctx.bezierCurveTo(28.7, 19.1, 28.9, 19.7, 28.9, 20.6);
      ctx.lineTo(26.0, 20.6);
      ctx.bezierCurveTo(26.1, 20.9, 26.1, 21.2, 26.3, 21.4);
      ctx.bezierCurveTo(26.5, 21.6, 26.7, 21.7, 27.0, 21.7);
      ctx.bezierCurveTo(27.2, 21.7, 27.3, 21.6, 27.4, 21.5);
      ctx.bezierCurveTo(27.5, 21.4, 27.6, 21.3, 27.7, 21.1);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(27.8, 19.9);
      ctx.bezierCurveTo(27.8, 19.6, 27.7, 19.3, 27.5, 19.2);
      ctx.bezierCurveTo(27.4, 19.0, 27.2, 18.9, 26.9, 18.9);
      ctx.bezierCurveTo(26.7, 18.9, 26.5, 19.0, 26.3, 19.2);
      ctx.bezierCurveTo(26.1, 19.3, 26.1, 19.6, 26.1, 19.9);
      ctx.lineTo(27.8, 19.9);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(33.9, 22.4);
      ctx.lineTo(32.9, 22.4);
      ctx.lineTo(32.9, 21.8);
      ctx.bezierCurveTo(32.7, 22.0, 32.5, 22.2, 32.3, 22.3);
      ctx.bezierCurveTo(32.0, 22.5, 31.8, 22.5, 31.5, 22.5);
      ctx.bezierCurveTo(31.0, 22.5, 30.6, 22.3, 30.3, 21.9);
      ctx.bezierCurveTo(29.9, 21.5, 29.7, 21.0, 29.7, 20.3);
      ctx.bezierCurveTo(29.7, 19.5, 29.9, 19.0, 30.3, 18.6);
      ctx.bezierCurveTo(30.6, 18.2, 31.0, 18.0, 31.6, 18.0);
      ctx.bezierCurveTo(32.0, 18.0, 32.4, 18.2, 32.8, 18.6);
      ctx.lineTo(32.8, 16.5);
      ctx.lineTo(33.9, 16.5);
      ctx.lineTo(33.9, 22.4);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(30.9, 20.2);
      ctx.bezierCurveTo(30.9, 20.6, 31.0, 21.0, 31.1, 21.2);
      ctx.bezierCurveTo(31.3, 21.5, 31.5, 21.6, 31.9, 21.6);
      ctx.bezierCurveTo(32.1, 21.6, 32.3, 21.5, 32.5, 21.3);
      ctx.bezierCurveTo(32.7, 21.1, 32.8, 20.7, 32.8, 20.3);
      ctx.bezierCurveTo(32.8, 19.8, 32.7, 19.4, 32.5, 19.2);
      ctx.bezierCurveTo(32.4, 19.0, 32.1, 18.9, 31.9, 18.9);
      ctx.bezierCurveTo(31.6, 18.9, 31.4, 19.0, 31.2, 19.2);
      ctx.bezierCurveTo(31.0, 19.4, 30.9, 19.8, 30.9, 20.2);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(35.2, 17.5);
      ctx.lineTo(35.2, 16.5);
      ctx.lineTo(36.4, 16.5);
      ctx.lineTo(36.4, 17.5);
      ctx.lineTo(35.2, 17.5);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(35.2, 22.4);
      ctx.lineTo(35.2, 18.1);
      ctx.lineTo(36.4, 18.1);
      ctx.lineTo(36.4, 22.4);
      ctx.lineTo(35.2, 22.4);
      ctx.closePath();
      ctx.fill();

      // background/Group/Group/Compound Path
      ctx.beginPath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(38.5, 19.4);
      ctx.lineTo(37.5, 19.2);
      ctx.bezierCurveTo(37.6, 18.8, 37.8, 18.5, 38.1, 18.3);
      ctx.bezierCurveTo(38.4, 18.1, 38.8, 18.0, 39.4, 18.0);
      ctx.bezierCurveTo(39.9, 18.0, 40.3, 18.1, 40.5, 18.2);
      ctx.bezierCurveTo(40.8, 18.3, 40.9, 18.5, 41.0, 18.7);
      ctx.bezierCurveTo(41.1, 18.8, 41.2, 19.2, 41.2, 19.7);
      ctx.lineTo(41.2, 21.0);
      ctx.bezierCurveTo(41.2, 21.4, 41.2, 21.7, 41.2, 21.8);
      ctx.bezierCurveTo(41.3, 22.0, 41.3, 22.2, 41.4, 22.4);
      ctx.lineTo(40.3, 22.4);
      ctx.bezierCurveTo(40.3, 22.3, 40.2, 22.2, 40.2, 22.1);
      ctx.bezierCurveTo(40.2, 22.0, 40.2, 22.0, 40.2, 22.0);
      ctx.bezierCurveTo(40.0, 22.1, 39.8, 22.3, 39.5, 22.4);
      ctx.bezierCurveTo(39.3, 22.5, 39.1, 22.5, 38.8, 22.5);
      ctx.bezierCurveTo(38.4, 22.5, 38.0, 22.4, 37.8, 22.2);
      ctx.bezierCurveTo(37.5, 21.9, 37.4, 21.6, 37.4, 21.2);
      ctx.bezierCurveTo(37.4, 21.0, 37.5, 20.8, 37.6, 20.6);
      ctx.bezierCurveTo(37.7, 20.4, 37.9, 20.3, 38.1, 20.2);
      ctx.bezierCurveTo(38.3, 20.1, 38.6, 20.0, 39.0, 19.9);
      ctx.bezierCurveTo(39.5, 19.8, 39.9, 19.7, 40.1, 19.6);
      ctx.lineTo(40.1, 19.5);
      ctx.bezierCurveTo(40.1, 19.3, 40.0, 19.1, 39.9, 19.0);
      ctx.bezierCurveTo(39.8, 18.9, 39.6, 18.9, 39.3, 18.9);
      ctx.bezierCurveTo(39.1, 18.9, 38.9, 18.9, 38.8, 19.0);
      ctx.bezierCurveTo(38.7, 19.1, 38.6, 19.2, 38.5, 19.4);
      ctx.closePath();

      // background/Group/Group/Compound Path/Path
      ctx.moveTo(40.1, 20.4);
      ctx.bezierCurveTo(39.9, 20.4, 39.7, 20.5, 39.4, 20.5);
      ctx.bezierCurveTo(39.1, 20.6, 38.9, 20.7, 38.8, 20.7);
      ctx.bezierCurveTo(38.6, 20.8, 38.5, 21.0, 38.5, 21.1);
      ctx.bezierCurveTo(38.5, 21.3, 38.6, 21.4, 38.7, 21.5);
      ctx.bezierCurveTo(38.8, 21.7, 39.0, 21.7, 39.2, 21.7);
      ctx.bezierCurveTo(39.4, 21.7, 39.6, 21.7, 39.8, 21.5);
      ctx.bezierCurveTo(39.9, 21.4, 40.0, 21.3, 40.0, 21.1);
      ctx.bezierCurveTo(40.1, 21.0, 40.1, 20.9, 40.1, 20.6);
      ctx.lineTo(40.1, 20.4);
      ctx.closePath();
      ctx.fill();

      // background/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(30.7, 16.0);
      ctx.lineTo(1.4, 16.0);
      ctx.lineTo(1.4, 0.0);
      ctx.lineTo(30.7, 0.0);
      ctx.lineTo(30.7, 16.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // background/Group/Compound Path
      ctx.beginPath();

      // background/Group/Compound Path/Path
      ctx.moveTo(27.6, 3.0);
      ctx.lineTo(27.6, 4.7);
      ctx.lineTo(24.6, 4.7);
      ctx.lineTo(24.4, 8.1);
      ctx.bezierCurveTo(24.3, 8.7, 24.3, 9.2, 24.3, 9.7);
      ctx.bezierCurveTo(24.3, 10.7, 24.4, 11.4, 24.7, 11.6);
      ctx.bezierCurveTo(25.0, 11.8, 25.3, 11.9, 25.7, 11.9);
      ctx.bezierCurveTo(26.5, 11.9, 27.0, 11.5, 27.2, 10.6);
      ctx.lineTo(27.6, 10.6);
      ctx.bezierCurveTo(27.4, 12.7, 26.4, 13.7, 24.8, 13.7);
      ctx.bezierCurveTo(24.0, 13.7, 23.4, 13.5, 23.0, 13.1);
      ctx.bezierCurveTo(22.5, 12.7, 22.3, 12.1, 22.3, 11.3);
      ctx.bezierCurveTo(22.3, 10.8, 22.4, 9.6, 22.5, 7.9);
      ctx.lineTo(22.9, 4.7);
      ctx.lineTo(20.2, 4.7);
      ctx.bezierCurveTo(20.0, 7.4, 19.8, 9.4, 19.5, 10.7);
      ctx.bezierCurveTo(19.3, 12.0, 19.0, 12.8, 18.7, 13.2);
      ctx.bezierCurveTo(18.4, 13.5, 18.0, 13.7, 17.4, 13.7);
      ctx.bezierCurveTo(17.0, 13.7, 16.7, 13.6, 16.4, 13.4);
      ctx.bezierCurveTo(16.2, 13.2, 16.0, 12.9, 16.0, 12.6);
      ctx.bezierCurveTo(16.0, 12.3, 16.3, 11.9, 16.7, 11.3);
      ctx.bezierCurveTo(17.4, 10.5, 17.9, 9.7, 18.2, 8.8);
      ctx.bezierCurveTo(18.6, 7.9, 18.8, 6.6, 19.0, 4.7);
      ctx.lineTo(18.1, 4.7);
      ctx.bezierCurveTo(17.4, 4.7, 16.9, 4.8, 16.5, 5.1);
      ctx.bezierCurveTo(16.1, 5.4, 15.8, 5.8, 15.5, 6.3);
      ctx.lineTo(15.0, 6.3);
      ctx.bezierCurveTo(15.2, 5.5, 15.6, 4.8, 16.0, 4.3);
      ctx.bezierCurveTo(16.3, 3.8, 16.8, 3.4, 17.2, 3.3);
      ctx.bezierCurveTo(17.6, 3.1, 18.3, 3.0, 19.4, 3.0);
      ctx.lineTo(27.6, 3.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();

      // background/Group/Path
      ctx.beginPath();
      ctx.moveTo(14.0, 11.2);
      ctx.bezierCurveTo(13.1, 12.4, 11.8, 13.0, 10.4, 13.0);
      ctx.bezierCurveTo(9.4, 13.0, 8.5, 12.7, 7.8, 12.0);
      ctx.bezierCurveTo(7.2, 11.4, 6.8, 10.3, 6.8, 8.8);
      ctx.lineTo(6.8, 8.4);
      ctx.lineTo(11.1, 8.4);
      ctx.lineTo(11.1, 7.4);
      ctx.lineTo(6.9, 7.4);
      ctx.bezierCurveTo(7.1, 6.2, 7.5, 5.2, 8.0, 4.5);
      ctx.bezierCurveTo(8.6, 3.8, 9.3, 3.4, 10.2, 3.4);
      ctx.bezierCurveTo(11.0, 3.4, 11.7, 3.7, 12.2, 4.2);
      ctx.bezierCurveTo(12.8, 4.8, 13.1, 5.5, 13.2, 6.2);
      ctx.lineTo(13.7, 6.2);
      ctx.lineTo(13.7, 3.0);
      ctx.lineTo(13.2, 3.0);
      ctx.bezierCurveTo(13.0, 3.2, 12.8, 3.2, 12.6, 3.2);
      ctx.bezierCurveTo(12.5, 3.2, 12.2, 3.2, 11.7, 3.0);
      ctx.bezierCurveTo(10.9, 2.8, 10.2, 2.7, 9.7, 2.7);
      ctx.bezierCurveTo(8.4, 2.7, 7.1, 3.2, 6.0, 4.2);
      ctx.bezierCurveTo(5.0, 5.2, 4.4, 6.5, 4.4, 8.1);
      ctx.bezierCurveTo(4.4, 9.6, 4.9, 10.9, 6.0, 12.1);
      ctx.bezierCurveTo(7.1, 13.2, 8.4, 13.7, 10.1, 13.7);
      ctx.bezierCurveTo(11.8, 13.7, 13.3, 12.9, 14.5, 11.4);
      ctx.lineTo(14.0, 11.2);
      ctx.closePath();
      ctx.fill();

      // background/Group/TM
      ctx.font = "Bold 2.0px 'Arial'";
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fillText("TM", 42.3, 22.4);

      // background/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(560.0, 330.0);
      ctx.lineTo(10.0, 330.0);
      ctx.lineTo(10.0, 30.0);
      ctx.lineTo(560.0, 30.0);
      ctx.lineTo(560.0, 330.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();

      // layer7/Group
      ctx.save();

      // layer7/Group/Group
      ctx.save();

      // layer7/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(11.0, 330.0);
      ctx.lineTo(10.0, 330.0);
      ctx.lineTo(10.0, 30.0);
      ctx.lineTo(11.0, 30.0);
      ctx.lineTo(11.0, 330.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 147, 29)";
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(61.0, 330.0);
      ctx.lineTo(60.0, 330.0);
      ctx.lineTo(60.0, 30.0);
      ctx.lineTo(61.0, 30.0);
      ctx.lineTo(61.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(111.0, 330.0);
      ctx.lineTo(110.0, 330.0);
      ctx.lineTo(110.0, 30.0);
      ctx.lineTo(111.0, 30.0);
      ctx.lineTo(111.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(161.0, 330.0);
      ctx.lineTo(160.0, 330.0);
      ctx.lineTo(160.0, 30.0);
      ctx.lineTo(161.0, 30.0);
      ctx.lineTo(161.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(211.0, 330.0);
      ctx.lineTo(210.0, 330.0);
      ctx.lineTo(210.0, 30.0);
      ctx.lineTo(211.0, 30.0);
      ctx.lineTo(211.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(261.0, 330.0);
      ctx.lineTo(260.0, 330.0);
      ctx.lineTo(260.0, 30.0);
      ctx.lineTo(261.0, 30.0);
      ctx.lineTo(261.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(311.0, 330.0);
      ctx.lineTo(310.0, 330.0);
      ctx.lineTo(310.0, 30.0);
      ctx.lineTo(311.0, 30.0);
      ctx.lineTo(311.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(361.0, 330.0);
      ctx.lineTo(360.0, 330.0);
      ctx.lineTo(360.0, 30.0);
      ctx.lineTo(361.0, 30.0);
      ctx.lineTo(361.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(411.0, 330.0);
      ctx.lineTo(410.0, 330.0);
      ctx.lineTo(410.0, 30.0);
      ctx.lineTo(411.0, 30.0);
      ctx.lineTo(411.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(461.0, 330.0);
      ctx.lineTo(460.0, 330.0);
      ctx.lineTo(460.0, 30.0);
      ctx.lineTo(461.0, 30.0);
      ctx.lineTo(461.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(511.0, 330.0);
      ctx.lineTo(510.0, 330.0);
      ctx.lineTo(510.0, 30.0);
      ctx.lineTo(511.0, 30.0);
      ctx.lineTo(511.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(561.0, 330.0);
      ctx.lineTo(560.0, 330.0);
      ctx.lineTo(560.0, 30.0);
      ctx.lineTo(561.0, 30.0);
      ctx.lineTo(561.0, 330.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group
      ctx.restore();

      // layer7/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(560.0, 31.0);
      ctx.lineTo(10.0, 31.0);
      ctx.lineTo(10.0, 30.0);
      ctx.lineTo(560.0, 30.0);
      ctx.lineTo(560.0, 31.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 147, 29)";
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 81.0);
      ctx.lineTo(10.0, 81.0);
      ctx.lineTo(10.0, 80.0);
      ctx.lineTo(560.0, 80.0);
      ctx.lineTo(560.0, 81.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 131.0);
      ctx.lineTo(10.0, 131.0);
      ctx.lineTo(10.0, 130.0);
      ctx.lineTo(560.0, 130.0);
      ctx.lineTo(560.0, 131.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 181.0);
      ctx.lineTo(10.0, 181.0);
      ctx.lineTo(10.0, 180.0);
      ctx.lineTo(560.0, 180.0);
      ctx.lineTo(560.0, 181.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 231.0);
      ctx.lineTo(10.0, 231.0);
      ctx.lineTo(10.0, 230.0);
      ctx.lineTo(560.0, 230.0);
      ctx.lineTo(560.0, 231.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 281.0);
      ctx.lineTo(10.0, 281.0);
      ctx.lineTo(10.0, 280.0);
      ctx.lineTo(560.0, 280.0);
      ctx.lineTo(560.0, 281.0);
      ctx.closePath();
      ctx.fill();

      // layer7/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(560.0, 331.0);
      ctx.lineTo(10.0, 331.0);
      ctx.lineTo(10.0, 330.0);
      ctx.lineTo(560.0, 330.0);
      ctx.lineTo(560.0, 331.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();

}
