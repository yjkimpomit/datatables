/* datatable-common.js */
// 1. 공통 옵션 객체를 전역(혹은 상위 스코프)에 정의
const COMMON_DATATABLES_OPTIONS = {
	responsive: true,
	scrollCollapse: true,
	scroller: true,
	scrollX: true,
	scrollY: 480,
	fixedHeader: true,
	fixedColumns: { leftColumns: 1 },
	colReorder: true,
	buttons: [
		'excel', 'pdf'
	],
	paging: true,
	lengthMenu: [[2, 10, 25, 100, -1], [2, 10, 25, 100, "All"]],
	pageLength: 10,
	layout: {
		topStart: 'buttons',
		topEnd: 'search',
		bottomStart: 'pageLength',
		bottomEnd: {
			paging: {
				boundaryNumbers: false,
				firstLast: false,
				previousNext: false,
				type: 'numbers'
			}
		}
	},
	language: {
		url: './js/datatables/plug-ins/2.3.0/i18n/ko.json'
	}
};

// 2. 범용 적용 함수
function applyDataTablesToTarget(targetSelector, customOptions = {}) {
	$(`${targetSelector} table`).each(function() {
		// 이미 DataTable이 적용된 경우 destroy 후 재초기화
		if ($.fn.DataTable.isDataTable(this)) {
			$(this).DataTable().destroy();
		}
		// 공통 옵션과 개별 옵션을 합쳐서 적용
		$(this).DataTable(Object.assign(
			{ destroy: true }, // 항상 destroy 옵션 추가
			COMMON_DATATABLES_OPTIONS, // 공통 옵션
			customOptions // 필요시 개별 옵션 덮어쓰기
		));
	});
}