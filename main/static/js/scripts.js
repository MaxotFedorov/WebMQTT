// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('theme') === 'theme-dark') {
		setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
})();




function setMainPage() {
	let root = document.documentElement;
	root.style.setProperty('--visibilityMainPageElement', 'visible');
	root.style.setProperty('--visibilityDevicesPageElement', 'hidden');
	root.style.setProperty('--visibilitySettingsPageElement', 'hidden');
}

function setDevicesPage() {
	let root = document.documentElement;
	root.style.setProperty('--visibilityMainPageElement', 'hidden');
	root.style.setProperty('--visibilityDevicesPageElement', 'visible');
	root.style.setProperty('--visibilitySettingsPageElement', 'hidden');
}

function setSettingsPage() {
	let root = document.documentElement;
	root.style.setProperty('--visibilityMainPageElement', 'hidden');
	root.style.setProperty('--visibilityDevicesPageElement', 'hidden');
	root.style.setProperty('--visibilitySettingsPageElement', 'visible');
}

function changeMainColor() {
	console.log('Change Color');
	var main_color = document.getElementById("main-color");
	let root = document.documentElement;
	root.style.setProperty('--color-change', main_color.value);
}



