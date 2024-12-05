export default {
	defaultTab: 'vitrihientai',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},
	actionYeuCauTroCap: () => {
		const check = appsmith.store.id_user;
		if(check){
			navigateTo("Yêu cầu cứu trợ")
		}
		else{
			showAlert("Vui lòng đăng nhập để yêu cầu cứu trợ!" , "error");
			navigateTo("Đăng Nhập")
		}
	}

}