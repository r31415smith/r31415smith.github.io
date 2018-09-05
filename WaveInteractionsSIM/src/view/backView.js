var backView = function(canvas)
{
    var ctx = canvas.getContext("2d");

      // backgroundBox/
      ctx.save();
      ctx.restore();

      // keypadRight/
      ctx.save();
      ctx.restore();

      // backgrounds/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(175.0, 400.5);
      ctx.lineTo(5.0, 400.5);
      ctx.lineTo(5.0, 335.5);
      ctx.lineTo(175.0, 335.5);
      ctx.lineTo(175.0, 400.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 221, 241)";
      ctx.fill();
      ctx.strokeStyle = "rgb(159, 192, 229)";
      ctx.stroke();

      // backgrounds/Path
      ctx.beginPath();
      ctx.moveTo(175.0, 480.5);
      ctx.lineTo(5.0, 480.5);
      ctx.lineTo(5.0, 415.5);
      ctx.lineTo(175.0, 415.5);
      ctx.lineTo(175.0, 480.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // backgrounds/Path
      ctx.beginPath();
      ctx.moveTo(365.0, 400.5);
      ctx.lineTo(195.0, 400.5);
      ctx.lineTo(195.0, 335.5);
      ctx.lineTo(365.0, 335.5);
      ctx.lineTo(365.0, 400.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // backgrounds/Path
      ctx.beginPath();
      ctx.moveTo(585.0, 480.5);
      ctx.lineTo(415.0, 480.5);
      ctx.lineTo(415.0, 335.5);
      ctx.lineTo(585.0, 335.5);
      ctx.lineTo(585.0, 480.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 230, 231)";
      ctx.fill();
      ctx.strokeStyle = "rgb(146, 148, 151)";
      ctx.stroke();
      ctx.restore();

      // buttons/
      ctx.save();
      ctx.restore();

      /*/ backgroundText/Frequency
      ctx.save();
      ctx.font = "14.0px 'Arial'";

// Grid labels; these should go on/off with the grid
      ctx.fillText("0 m",     2, 310);
      ctx.fillText("0.5",   127, 310);
      ctx.fillText("1.0",   252, 310);
      ctx.fillText("1.5",   380, 310);
      ctx.fillText("2.0",   510, 310);

      ctx.fillText("1.0",   525,  38);
      ctx.fillText("0.5",   525, 166);
      ctx.fillText("0 m",   525, 294);/* */

      ctx.font = "18.0px 'Arial'";
      ctx.fillText("Frequency", 635.0, 205);

      // 
      ctx.fillText("Time", 560.0, 50);

      // backgroundText/m
      ctx.fillText("s", 630, 80);

      // backgroundText/Hz
      ctx.fillText("Hz", 744.3, 237.0);

      // backgroundText/Wavelength
      ctx.fillText("Wavelength", 635.0, 280);

      // backgroundText/m
      ctx.fillText("m", 744.3, 312.0);

      // backgroundText/Wavelength
      ctx.fillText("Angle of surface", 635.0, 355);

      // backgroundText/Wavelength
      ctx.fillText("Index of refraction", 635.0, 430);

      // backgroundText/m
      ctx.fillText("deg", 744.3, 387.0);



      // backgroundText/Wave interaction
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillText("Wave interaction", 12.0, 356.3);

      // backgroundText/Waveform
      ctx.fillText("Waveform", 202.0, 356.3);

      // backgroundText/Boundary
      ctx.fillText("Boundary", 422.0, 356.3);

      // backgroundText/Wave duration
      ctx.fillText("Wave duration", 12.0, 436);

      // backgroundText/Wave duration
      ctx.fillText("Display resolution", 202.0, 436);
      ctx.restore();

      // pulldownMenusBoxes/
      ctx.save();
      ctx.restore();

      // entryBoxes/
      ctx.save();
      ctx.restore();

      // sampleValuesReflection/
      ctx.save();
      ctx.restore();

      // tESTINGImageBox/
      ctx.save();
      ctx.restore();

      ctx.save();

/* These were only for development purposes
      // tESTINGFT1Boxes/FT 1 amplitude
      ctx.font = "18.0px 'Arial'";
      ctx.fillText("FT 1 amplitude", 6.0, 532.0);

      // tESTINGFT1Boxes/FT 1 phase
      ctx.fillText("FT 1 phase", 306.0, 532.0);
      ctx.restore();

      // tESTINGFT2Boxes/FT 2 amplitude
      ctx.save();
      ctx.font = "18.0px 'Arial'";
      ctx.fillText("FT 2 amplitude", 6.0, 832.0);

      // tESTINGFT2Boxes/FT 2 phase
      ctx.fillText("FT 2 phase", 306.0, 832.0);
      ctx.restore();
*/

      // tESTINGPlaneWaves/
      ctx.save();
      ctx.restore();

      // title/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(980.0, 25.0);
      ctx.lineTo(0.0, 25.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(980.0, 0.0);
      ctx.lineTo(980.0, 25.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();

      // title/Wave interactions
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillStyle = "rgb(45, 48, 144)";
      ctx.fillText("Wave interactions", 70, 19);

      // title/Group

      // title/Group/Group
      ctx.save();

      // title/Group/Group/Compound Path
      ctx.save();
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(9.7, 21.1);
      ctx.lineTo(10.9, 21.2);
      ctx.bezierCurveTo(10.7, 21.7, 10.5, 22.0, 10.2, 22.2);
      ctx.bezierCurveTo(9.9, 22.4, 9.5, 22.5, 9.0, 22.5);
      ctx.bezierCurveTo(8.3, 22.5, 7.7, 22.3, 7.3, 21.8);
      ctx.bezierCurveTo(7.1, 21.4, 6.9, 20.9, 6.9, 20.3);
      ctx.bezierCurveTo(6.9, 19.6, 7.1, 19.0, 7.5, 18.6);
      ctx.bezierCurveTo(7.8, 18.2, 8.3, 18.0, 8.9, 18.0);
      ctx.bezierCurveTo(9.5, 18.0, 10.0, 18.2, 10.4, 18.7);
      ctx.bezierCurveTo(10.8, 19.1, 10.9, 19.7, 10.9, 20.6);
      ctx.lineTo(8.1, 20.6);
      ctx.bezierCurveTo(8.1, 20.9, 8.2, 21.2, 8.4, 21.4);
      ctx.bezierCurveTo(8.5, 21.6, 8.7, 21.7, 9.0, 21.7);
      ctx.bezierCurveTo(9.2, 21.7, 9.3, 21.6, 9.5, 21.5);
      ctx.bezierCurveTo(9.6, 21.4, 9.7, 21.3, 9.7, 21.1);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(9.8, 19.9);
      ctx.bezierCurveTo(9.8, 19.6, 9.7, 19.3, 9.5, 19.2);
      ctx.bezierCurveTo(9.4, 19.0, 9.2, 18.9, 9.0, 18.9);
      ctx.bezierCurveTo(8.7, 18.9, 8.5, 19.0, 8.3, 19.2);
      ctx.bezierCurveTo(8.2, 19.3, 8.1, 19.6, 8.1, 19.9);
      ctx.lineTo(9.8, 19.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(13.1, 22.4);
      ctx.lineTo(12.0, 22.4);
      ctx.lineTo(12.0, 18.1);
      ctx.lineTo(13.0, 18.1);
      ctx.lineTo(13.0, 18.7);
      ctx.bezierCurveTo(13.2, 18.4, 13.4, 18.3, 13.5, 18.2);
      ctx.bezierCurveTo(13.7, 18.1, 13.8, 18.0, 14.0, 18.0);
      ctx.bezierCurveTo(14.3, 18.0, 14.5, 18.1, 14.8, 18.2);
      ctx.lineTo(14.4, 19.2);
      ctx.bezierCurveTo(14.2, 19.1, 14.0, 19.0, 13.9, 19.0);
      ctx.bezierCurveTo(13.7, 19.0, 13.6, 19.1, 13.5, 19.2);
      ctx.bezierCurveTo(13.4, 19.3, 13.3, 19.4, 13.2, 19.7);
      ctx.bezierCurveTo(13.1, 19.9, 13.1, 20.4, 13.1, 21.1);
      ctx.lineTo(13.1, 22.4);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(15.3, 22.7);
      ctx.lineTo(16.6, 22.9);
      ctx.bezierCurveTo(16.6, 23.0, 16.7, 23.1, 16.8, 23.2);
      ctx.bezierCurveTo(16.9, 23.3, 17.0, 23.3, 17.3, 23.3);
      ctx.bezierCurveTo(17.6, 23.3, 17.8, 23.3, 17.9, 23.2);
      ctx.bezierCurveTo(18.0, 23.1, 18.1, 23.0, 18.2, 22.9);
      ctx.bezierCurveTo(18.2, 22.8, 18.2, 22.6, 18.2, 22.4);
      ctx.lineTo(18.2, 21.7);
      ctx.bezierCurveTo(17.9, 22.2, 17.5, 22.4, 16.9, 22.4);
      ctx.bezierCurveTo(16.4, 22.4, 15.9, 22.2, 15.6, 21.7);
      ctx.bezierCurveTo(15.3, 21.3, 15.2, 20.8, 15.2, 20.2);
      ctx.bezierCurveTo(15.2, 19.5, 15.3, 19.0, 15.7, 18.6);
      ctx.bezierCurveTo(16.0, 18.2, 16.5, 18.0, 17.0, 18.0);
      ctx.bezierCurveTo(17.5, 18.0, 18.0, 18.3, 18.3, 18.7);
      ctx.lineTo(18.3, 18.1);
      ctx.lineTo(19.4, 18.1);
      ctx.lineTo(19.4, 22.0);
      ctx.bezierCurveTo(19.4, 22.5, 19.3, 22.9, 19.2, 23.1);
      ctx.bezierCurveTo(19.2, 23.4, 19.0, 23.6, 18.9, 23.7);
      ctx.bezierCurveTo(18.7, 23.9, 18.5, 24.0, 18.3, 24.0);
      ctx.bezierCurveTo(18.0, 24.1, 17.7, 24.2, 17.3, 24.2);
      ctx.bezierCurveTo(16.6, 24.2, 16.1, 24.0, 15.8, 23.8);
      ctx.bezierCurveTo(15.5, 23.5, 15.3, 23.2, 15.3, 22.8);
      ctx.bezierCurveTo(15.3, 22.8, 15.3, 22.8, 15.3, 22.7);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(16.3, 20.2);
      ctx.bezierCurveTo(16.3, 20.6, 16.4, 21.0, 16.6, 21.2);
      ctx.bezierCurveTo(16.8, 21.4, 17.0, 21.5, 17.3, 21.5);
      ctx.bezierCurveTo(17.5, 21.5, 17.8, 21.4, 18.0, 21.2);
      ctx.bezierCurveTo(18.1, 21.0, 18.2, 20.6, 18.2, 20.2);
      ctx.bezierCurveTo(18.2, 19.8, 18.2, 19.4, 18.0, 19.2);
      ctx.bezierCurveTo(17.8, 19.0, 17.6, 18.9, 17.3, 18.9);
      ctx.bezierCurveTo(17.0, 18.9, 16.8, 19.0, 16.6, 19.2);
      ctx.bezierCurveTo(16.4, 19.4, 16.3, 19.7, 16.3, 20.2);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(20.4, 20.2);
      ctx.bezierCurveTo(20.4, 19.8, 20.5, 19.5, 20.7, 19.1);
      ctx.bezierCurveTo(20.9, 18.8, 21.1, 18.5, 21.5, 18.3);
      ctx.bezierCurveTo(21.8, 18.1, 22.2, 18.0, 22.6, 18.0);
      ctx.bezierCurveTo(23.3, 18.0, 23.8, 18.2, 24.2, 18.7);
      ctx.bezierCurveTo(24.6, 19.1, 24.8, 19.6, 24.8, 20.3);
      ctx.bezierCurveTo(24.8, 20.9, 24.6, 21.5, 24.2, 21.9);
      ctx.bezierCurveTo(23.8, 22.3, 23.3, 22.5, 22.6, 22.5);
      ctx.bezierCurveTo(22.2, 22.5, 21.8, 22.4, 21.5, 22.3);
      ctx.bezierCurveTo(21.1, 22.1, 20.9, 21.8, 20.7, 21.5);
      ctx.bezierCurveTo(20.5, 21.1, 20.4, 20.7, 20.4, 20.2);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(21.6, 20.3);
      ctx.bezierCurveTo(21.6, 20.7, 21.7, 21.0, 21.9, 21.3);
      ctx.bezierCurveTo(22.1, 21.5, 22.3, 21.6, 22.6, 21.6);
      ctx.bezierCurveTo(22.9, 21.6, 23.2, 21.5, 23.4, 21.3);
      ctx.bezierCurveTo(23.6, 21.0, 23.7, 20.7, 23.7, 20.3);
      ctx.bezierCurveTo(23.7, 19.8, 23.6, 19.5, 23.4, 19.3);
      ctx.bezierCurveTo(23.2, 19.1, 22.9, 19.0, 22.6, 19.0);
      ctx.bezierCurveTo(22.3, 19.0, 22.1, 19.1, 21.9, 19.3);
      ctx.bezierCurveTo(21.7, 19.5, 21.6, 19.8, 21.6, 20.3);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(25.9, 18.1);
      ctx.lineTo(26.9, 18.1);
      ctx.lineTo(26.9, 18.8);
      ctx.bezierCurveTo(27.1, 18.5, 27.2, 18.4, 27.5, 18.2);
      ctx.bezierCurveTo(27.7, 18.1, 28.0, 18.0, 28.3, 18.0);
      ctx.bezierCurveTo(28.8, 18.0, 29.2, 18.2, 29.5, 18.6);
      ctx.bezierCurveTo(29.9, 19.0, 30.1, 19.5, 30.1, 20.2);
      ctx.bezierCurveTo(30.1, 21.0, 29.9, 21.5, 29.5, 21.9);
      ctx.bezierCurveTo(29.2, 22.3, 28.8, 22.5, 28.3, 22.5);
      ctx.bezierCurveTo(28.0, 22.5, 27.8, 22.5, 27.6, 22.4);
      ctx.bezierCurveTo(27.4, 22.3, 27.2, 22.1, 27.0, 21.9);
      ctx.lineTo(27.0, 24.1);
      ctx.lineTo(25.9, 24.1);
      ctx.lineTo(25.9, 18.1);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(27.0, 20.2);
      ctx.bezierCurveTo(27.0, 20.7, 27.1, 21.0, 27.3, 21.3);
      ctx.bezierCurveTo(27.5, 21.5, 27.7, 21.6, 28.0, 21.6);
      ctx.bezierCurveTo(28.2, 21.6, 28.5, 21.5, 28.6, 21.3);
      ctx.bezierCurveTo(28.8, 21.1, 28.9, 20.7, 28.9, 20.3);
      ctx.bezierCurveTo(28.9, 19.8, 28.8, 19.5, 28.6, 19.3);
      ctx.bezierCurveTo(28.4, 19.0, 28.2, 18.9, 28.0, 18.9);
      ctx.bezierCurveTo(27.7, 18.9, 27.4, 19.0, 27.3, 19.2);
      ctx.bezierCurveTo(27.1, 19.5, 27.0, 19.8, 27.0, 20.2);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(33.6, 21.1);
      ctx.lineTo(34.8, 21.2);
      ctx.bezierCurveTo(34.6, 21.7, 34.4, 22.0, 34.1, 22.2);
      ctx.bezierCurveTo(33.7, 22.4, 33.4, 22.5, 32.9, 22.5);
      ctx.bezierCurveTo(32.1, 22.5, 31.6, 22.3, 31.2, 21.8);
      ctx.bezierCurveTo(30.9, 21.4, 30.8, 20.9, 30.8, 20.3);
      ctx.bezierCurveTo(30.8, 19.6, 31.0, 19.0, 31.4, 18.6);
      ctx.bezierCurveTo(31.7, 18.2, 32.2, 18.0, 32.8, 18.0);
      ctx.bezierCurveTo(33.4, 18.0, 33.9, 18.2, 34.3, 18.7);
      ctx.bezierCurveTo(34.7, 19.1, 34.8, 19.7, 34.8, 20.6);
      ctx.lineTo(32.0, 20.6);
      ctx.bezierCurveTo(32.0, 20.9, 32.1, 21.2, 32.2, 21.4);
      ctx.bezierCurveTo(32.4, 21.6, 32.6, 21.7, 32.9, 21.7);
      ctx.bezierCurveTo(33.1, 21.7, 33.2, 21.6, 33.3, 21.5);
      ctx.bezierCurveTo(33.5, 21.4, 33.6, 21.3, 33.6, 21.1);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(33.7, 19.9);
      ctx.bezierCurveTo(33.7, 19.6, 33.6, 19.3, 33.4, 19.2);
      ctx.bezierCurveTo(33.3, 19.0, 33.1, 18.9, 32.8, 18.9);
      ctx.bezierCurveTo(32.6, 18.9, 32.4, 19.0, 32.2, 19.2);
      ctx.bezierCurveTo(32.1, 19.3, 32.0, 19.6, 32.0, 19.9);
      ctx.lineTo(33.7, 19.9);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(39.9, 22.4);
      ctx.lineTo(38.8, 22.4);
      ctx.lineTo(38.8, 21.8);
      ctx.bezierCurveTo(38.6, 22.0, 38.4, 22.2, 38.2, 22.3);
      ctx.bezierCurveTo(37.9, 22.5, 37.7, 22.5, 37.4, 22.5);
      ctx.bezierCurveTo(37.0, 22.5, 36.5, 22.3, 36.2, 21.9);
      ctx.bezierCurveTo(35.8, 21.5, 35.6, 21.0, 35.6, 20.3);
      ctx.bezierCurveTo(35.6, 19.5, 35.8, 19.0, 36.2, 18.6);
      ctx.bezierCurveTo(36.5, 18.2, 36.9, 18.0, 37.5, 18.0);
      ctx.bezierCurveTo(37.9, 18.0, 38.4, 18.2, 38.7, 18.6);
      ctx.lineTo(38.7, 16.5);
      ctx.lineTo(39.9, 16.5);
      ctx.lineTo(39.9, 22.4);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(36.8, 20.2);
      ctx.bezierCurveTo(36.8, 20.6, 36.9, 21.0, 37.0, 21.2);
      ctx.bezierCurveTo(37.2, 21.5, 37.4, 21.6, 37.8, 21.6);
      ctx.bezierCurveTo(38.0, 21.6, 38.3, 21.5, 38.4, 21.3);
      ctx.bezierCurveTo(38.6, 21.1, 38.7, 20.7, 38.7, 20.3);
      ctx.bezierCurveTo(38.7, 19.8, 38.6, 19.4, 38.4, 19.2);
      ctx.bezierCurveTo(38.3, 19.0, 38.0, 18.9, 37.8, 18.9);
      ctx.bezierCurveTo(37.5, 18.9, 37.3, 19.0, 37.1, 19.2);
      ctx.bezierCurveTo(36.9, 19.4, 36.8, 19.8, 36.8, 20.2);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(41.1, 17.5);
      ctx.lineTo(41.1, 16.5);
      ctx.lineTo(42.3, 16.5);
      ctx.lineTo(42.3, 17.5);
      ctx.lineTo(41.1, 17.5);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(41.1, 22.4);
      ctx.lineTo(41.1, 18.1);
      ctx.lineTo(42.3, 18.1);
      ctx.lineTo(42.3, 22.4);
      ctx.lineTo(41.1, 22.4);
      ctx.closePath();
      ctx.fill();

      // title/Group/Group/Compound Path
      ctx.beginPath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(44.5, 19.4);
      ctx.lineTo(43.4, 19.2);
      ctx.bezierCurveTo(43.5, 18.8, 43.7, 18.5, 44.0, 18.3);
      ctx.bezierCurveTo(44.3, 18.1, 44.7, 18.0, 45.3, 18.0);
      ctx.bezierCurveTo(45.8, 18.0, 46.2, 18.1, 46.4, 18.2);
      ctx.bezierCurveTo(46.7, 18.3, 46.9, 18.5, 47.0, 18.7);
      ctx.bezierCurveTo(47.1, 18.8, 47.1, 19.2, 47.1, 19.7);
      ctx.lineTo(47.1, 21.0);
      ctx.bezierCurveTo(47.1, 21.4, 47.1, 21.7, 47.1, 21.8);
      ctx.bezierCurveTo(47.2, 22.0, 47.2, 22.2, 47.4, 22.4);
      ctx.lineTo(46.2, 22.4);
      ctx.bezierCurveTo(46.2, 22.3, 46.2, 22.2, 46.1, 22.1);
      ctx.bezierCurveTo(46.1, 22.0, 46.1, 22.0, 46.1, 22.0);
      ctx.bezierCurveTo(45.9, 22.1, 45.7, 22.3, 45.4, 22.4);
      ctx.bezierCurveTo(45.2, 22.5, 45.0, 22.5, 44.7, 22.5);
      ctx.bezierCurveTo(44.3, 22.5, 43.9, 22.4, 43.7, 22.2);
      ctx.bezierCurveTo(43.4, 21.9, 43.3, 21.6, 43.3, 21.2);
      ctx.bezierCurveTo(43.3, 21.0, 43.4, 20.8, 43.5, 20.6);
      ctx.bezierCurveTo(43.6, 20.4, 43.8, 20.3, 44.0, 20.2);
      ctx.bezierCurveTo(44.2, 20.1, 44.5, 20.0, 44.9, 19.9);
      ctx.bezierCurveTo(45.4, 19.8, 45.8, 19.7, 46.0, 19.6);
      ctx.lineTo(46.0, 19.5);
      ctx.bezierCurveTo(46.0, 19.3, 45.9, 19.1, 45.8, 19.0);
      ctx.bezierCurveTo(45.7, 18.9, 45.5, 18.9, 45.2, 18.9);
      ctx.bezierCurveTo(45.0, 18.9, 44.9, 18.9, 44.7, 19.0);
      ctx.bezierCurveTo(44.6, 19.1, 44.5, 19.2, 44.5, 19.4);
      ctx.closePath();

      // title/Group/Group/Compound Path/Path
      ctx.moveTo(46.0, 20.4);
      ctx.bezierCurveTo(45.8, 20.4, 45.6, 20.5, 45.3, 20.5);
      ctx.bezierCurveTo(45.0, 20.6, 44.8, 20.7, 44.7, 20.7);
      ctx.bezierCurveTo(44.5, 20.8, 44.4, 21.0, 44.4, 21.1);
      ctx.bezierCurveTo(44.4, 21.3, 44.5, 21.4, 44.6, 21.5);
      ctx.bezierCurveTo(44.7, 21.7, 44.9, 21.7, 45.1, 21.7);
      ctx.bezierCurveTo(45.3, 21.7, 45.5, 21.7, 45.7, 21.5);
      ctx.bezierCurveTo(45.8, 21.4, 45.9, 21.3, 45.9, 21.1);
      ctx.bezierCurveTo(46.0, 21.0, 46.0, 20.9, 46.0, 20.6);
      ctx.lineTo(46.0, 20.4);
      ctx.closePath();
      ctx.fill();

      // title/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(36.6, 16.0);
      ctx.lineTo(7.3, 16.0);
      ctx.lineTo(7.3, 0.0);
      ctx.lineTo(36.6, 0.0);
      ctx.lineTo(36.6, 16.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();

      // title/Group/Compound Path
      ctx.beginPath();

      // title/Group/Compound Path/Path
      ctx.moveTo(33.5, 3.0);
      ctx.lineTo(33.5, 4.7);
      ctx.lineTo(30.5, 4.7);
      ctx.lineTo(30.3, 8.1);
      ctx.bezierCurveTo(30.2, 8.7, 30.2, 9.2, 30.2, 9.7);
      ctx.bezierCurveTo(30.2, 10.7, 30.3, 11.4, 30.6, 11.6);
      ctx.bezierCurveTo(30.9, 11.8, 31.2, 11.9, 31.6, 11.9);
      ctx.bezierCurveTo(32.4, 11.9, 32.9, 11.5, 33.1, 10.6);
      ctx.lineTo(33.5, 10.6);
      ctx.bezierCurveTo(33.3, 12.7, 32.3, 13.7, 30.7, 13.7);
      ctx.bezierCurveTo(29.9, 13.7, 29.3, 13.5, 28.9, 13.1);
      ctx.bezierCurveTo(28.4, 12.7, 28.2, 12.1, 28.2, 11.3);
      ctx.bezierCurveTo(28.2, 10.8, 28.3, 9.6, 28.5, 7.9);
      ctx.lineTo(28.8, 4.7);
      ctx.lineTo(26.1, 4.7);
      ctx.bezierCurveTo(25.9, 7.4, 25.7, 9.4, 25.4, 10.7);
      ctx.bezierCurveTo(25.2, 12.0, 24.9, 12.8, 24.6, 13.2);
      ctx.bezierCurveTo(24.3, 13.5, 23.9, 13.7, 23.3, 13.7);
      ctx.bezierCurveTo(22.9, 13.7, 22.6, 13.6, 22.3, 13.4);
      ctx.bezierCurveTo(22.1, 13.2, 21.9, 12.9, 21.9, 12.6);
      ctx.bezierCurveTo(21.9, 12.3, 22.2, 11.9, 22.6, 11.3);
      ctx.bezierCurveTo(23.3, 10.5, 23.8, 9.7, 24.2, 8.8);
      ctx.bezierCurveTo(24.5, 7.9, 24.7, 6.6, 24.9, 4.7);
      ctx.lineTo(24.0, 4.7);
      ctx.bezierCurveTo(23.3, 4.7, 22.8, 4.8, 22.4, 5.1);
      ctx.bezierCurveTo(22.1, 5.4, 21.7, 5.8, 21.4, 6.3);
      ctx.lineTo(20.9, 6.3);
      ctx.bezierCurveTo(21.1, 5.5, 21.5, 4.8, 21.9, 4.3);
      ctx.bezierCurveTo(22.3, 3.8, 22.7, 3.4, 23.1, 3.3);
      ctx.bezierCurveTo(23.5, 3.1, 24.2, 3.0, 25.3, 3.0);
      ctx.lineTo(33.5, 3.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();

      // title/Group/Path
      ctx.beginPath();
      ctx.moveTo(19.9, 11.2);
      ctx.bezierCurveTo(19.0, 12.4, 17.8, 13.0, 16.3, 13.0);
      ctx.bezierCurveTo(15.3, 13.0, 14.4, 12.7, 13.8, 12.0);
      ctx.bezierCurveTo(13.1, 11.4, 12.7, 10.3, 12.7, 8.8);
      ctx.lineTo(12.7, 8.4);
      ctx.lineTo(17.0, 8.4);
      ctx.lineTo(17.0, 7.4);
      ctx.lineTo(12.9, 7.4);
      ctx.bezierCurveTo(13.0, 6.2, 13.4, 5.2, 14.0, 4.5);
      ctx.bezierCurveTo(14.5, 3.8, 15.3, 3.4, 16.1, 3.4);
      ctx.bezierCurveTo(16.9, 3.4, 17.6, 3.7, 18.1, 4.2);
      ctx.bezierCurveTo(18.7, 4.8, 19.0, 5.5, 19.1, 6.2);
      ctx.lineTo(19.6, 6.2);
      ctx.lineTo(19.6, 3.0);
      ctx.lineTo(19.1, 3.0);
      ctx.bezierCurveTo(18.9, 3.2, 18.7, 3.2, 18.5, 3.2);
      ctx.bezierCurveTo(18.4, 3.2, 18.1, 3.2, 17.6, 3.0);
      ctx.bezierCurveTo(16.8, 2.8, 16.2, 2.7, 15.6, 2.7);
      ctx.bezierCurveTo(14.3, 2.7, 13.0, 3.2, 12.0, 4.2);
      ctx.bezierCurveTo(10.9, 5.2, 10.3, 6.5, 10.3, 8.1);
      ctx.bezierCurveTo(10.3, 9.6, 10.9, 10.9, 11.9, 12.1);
      ctx.bezierCurveTo(13.0, 13.2, 14.4, 13.7, 16.0, 13.7);
      ctx.bezierCurveTo(17.7, 13.7, 19.2, 12.9, 20.4, 11.4);
      ctx.lineTo(19.9, 11.2);
      ctx.closePath();
      ctx.fill();

      // title/Group/TM
      ctx.font = "Bold 2.0px 'Arial'";
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fillText("TM", 48.2, 22.4);
      ctx.restore();
      ctx.restore();

}
