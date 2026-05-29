
		$(document).ready(()=> {
			// 목록 클릭 시 처리
			$(".public-list-wrap > li > a").on("click", function() {
				$(".public-list-wrap > li > a").removeClass("active");
				
				$(this).addClass("active");
				fnLeftInfoBlock(true);
			});
			
			 // 사이드버튼 클릭 시 처리
             $(".btn-side").on("click", function() {
            if($(".btn-side").hasClass("close")) {
            fnLeftInfoBlock(false);
                }
                else {
                fnLeftInfoBlock(true);
                }
            });
			
			// 상세내용 클로스버튼 클릭시 처리
			$(".modal-btn-close").on("click", function() {
				fnLeftInfoBlock(false);
			});
			
			// ＜＜ 클릭시 처리
			$(".btn-side-1st").on("click", function() {
				fnLeftSearchBlock(false);
				fnBtnPanelBlock(false);
			});
			
			$(".panel-open").on("click", function() {
				fnLeftSearchBlock(true);
				fnLeftInfoBlock(false);
			});
			// 조회목록 블록 처리
			let fnLeftSearchBlock = function(isShow) {
				if(isShow) {
					$(".map-sv-search").show();
				}
				else {
					$(".map-sv-search").hide();	
				}
				fnBtnSideBlock(isShow);
			};
			 // 상세내용 블록 처리
             let fnLeftInfoBlock = function(isShow) {
                fnBtnSideBlock(true);
                fnBtnPanelBlock(!isShow);
                if(isShow) {
                $(".facility-info-wrap").show();
                $(".btn-side").addClass("close");
                $(".btn-side").removeClass("open");
                $(".map-sv-search").addClass("facility-info");
                }
                else {
                $(".facility-info-wrap").hide();   
                $(".btn-side").addClass("open");
                $(".btn-side").removeClass("close");               
                $(".map-sv-search").removeClass("facility-info");
                }
            };
			// 사이드버튼 블록 처리
			let fnBtnSideBlock = function(isShow) {
				if(isShow) {
					$(".btn-side").show();
				}
				else {
					$(".btn-side").hide();	
				}
			};
			
			let fnBtnPanelBlock = function(isShow) {
				if(isShow) {
					$(".btn-side-1st").show();
				}
				else {
					$(".btn-side-1st").hide();
				}
			};
			
			let fnInit = function() {
				fnLeftInfoBlock(false);
			};
			
			fnInit();
		});	
		$(".facility-info-wrap").hide();
		$(".btn-side").hide();
