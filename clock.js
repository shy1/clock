
	function updateTime() {
		var time = new Date();

		updateHour(time.getHours());
		updateMinute(time.getMinutes());
		updateSecond(time.getSeconds());
	}

	function updateHour(hour) {
		if (hour < 12) {
			document.ampm.src = "img/dgam.png";
		} else {
			document.ampm.src = "img/dgpm.png";
		}
		
		if (hour == 0) {
			hour = 12;
		} else if (hour > 12) {
			hour = hour - 12;
		}

		if (hour < 10) {
			document.hr1.src = "img/dg0.png";
		} else {
			document.hr1.src = "img/dg1.png";
		}

		var hour2 = Math.floor(hour % 10);
		var h2src = "img/dg" + hour2 + ".png";
		document.hr2.src = h2src;

	}

	function updateMinute(minute) {
		var min1 = Math.floor((minute/10) % 10);
		var min2 = Math.floor(minute % 10);
		
		var mn1src = "img/dg" + min1 + ".png";
		var mn2src = "img/dg" + min2 + ".png";
		document.mn1.src = mn1src;
		document.mn2.src = mn2src;
	}

	function updateSecond(second) {
		var sec1 = Math.floor((second/10) % 10);
		var sec2 = Math.floor(second % 10);
		
		var se1src = "img/dg" + sec1 + ".png";
		var se2src = "img/dg" + sec2 + ".png";
		document.se1.src = se1src;
		document.se2.src = se2src;
	}
	
	var iv = setInterval(function () {updateTime()}, 1000);