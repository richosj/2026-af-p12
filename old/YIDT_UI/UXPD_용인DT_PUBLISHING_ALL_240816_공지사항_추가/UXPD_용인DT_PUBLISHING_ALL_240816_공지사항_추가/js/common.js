$(document).ready(()=> {

	// 레프트메뉴 클로즈및 조회 클릭시 처리
	$(".content .search-area .search-wrap button").on("click", function(){
		var btnSearch = $(this);

		if(btnSearch.hasClass("btn-cancel")) {
			btnSearch.removeClass("btn-cancel");
			btnSearch.addClass("btn-search");
			//fnLeftInfoBlock(false);
			//fnLeftSearchBlock(false);
			fnALLBlock(false);
		}
		else {
			btnSearch.removeClass("btn-search");
			btnSearch.addClass("btn-cancel");
			//fnLeftInfoBlock(true);
			//fnLeftSearchBlock(true);
			fnALLBlock(true);
		}

		if(fnLeftSearchBlock(false)){
			fnLeftInfoBlock(false);
			fnLeftSearchBlock(false);
		}

		if(fnLeftSearchBlock(true)){
			fnLeftSearchBlock(true);
			fnLeftInfoBlock(true);
		}
	});


	// 목록 클릭 시 처리
	$(".public-list-wrap > li > a").on("click", function() {
		$(".public-list-wrap > li > a").removeClass("active");

		$(this).addClass("active");
		fnLeftInfoBlock(true);
	});

	// 사이드버튼 클릭 시 처리
	$(".btn-side").on("click", function() {
		fnLeftInfoBlock($(this).hasClass("open"));
	});

	$(".btn-side-1st").on("click", function() {
		fnLeftSearchBlock(false);
		//fnBtnPanelBlock(false);
	});

	$(".panel-open").on("click", function() {
		fnLeftSearchBlock(true);
		fnLeftInfoBlock(false);
	});

	// 상세내용 클로스버튼 클릭시 처리
	//$(".modal-btn-close").on("click", function() {
	//	fnLeftInfoBlock(false);
	//});

	// 조회목록 블록 처리

	let fnLeftSearchBlock = function(isShow) {
		if(isShow) {
			$(".map-sv-search,.realtimeall").show();
			//$(".map-sv-search").removeClass("facility-info");
		}
		else {
			$(".map-sv-search,.realtimeall").hide();
			//$(".map-sv-search").addClass("facility-info");
		}
		fnBtnSideBlock(isShow);
	}
	// 상세내용 블록 처리
	let fnLeftInfoBlock = function(isShow) {
		if(isShow) {
			$(".facility-info-wrap").show();
			$(".btn-side,.btn-side-1st").addClass("close");
			$(".btn-side,.btn-side-1st").removeClass("open");
			$(".map-sv-search").addClass("facility-info");
		}
		else {
			$(".facility-info-wrap").hide();
			$(".btn-side,.btn-side-1st").addClass("open");
			$(".btn-side,.btn-side-1st").removeClass("close");
			$(".map-sv-search").removeClass("facility-info");
		}
	};

	// 사이드버튼 블록 처리
	let fnBtnSideBlock = function(isShow) {
		if(isShow) {
			$(".btn-side,.btn-side-1st").show();
		}
		else {
			$(".btn-side,.btn-side-1st").hide();
		}
	};


	let fnALLBlock = function(isShow) {
		if(isShow) {
			$(".map-sv-search-wrap").show();
		}
		else {
			$(".map-sv-search-wrap").hide();
		}
		//fnBtnSideBlock(isShow);
	}
});