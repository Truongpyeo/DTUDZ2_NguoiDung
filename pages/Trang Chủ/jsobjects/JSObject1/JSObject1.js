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
	},
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Do Van E",
			"location": "345 Đường MNO, Quận 5, TP.HCM"
		}
	}


}