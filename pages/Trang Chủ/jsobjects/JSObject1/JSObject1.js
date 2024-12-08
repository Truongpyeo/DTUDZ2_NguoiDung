export default {
load () {
		const socket = new AppsmithSocket().connect()
		socket.on("send_location_response", (data) => {
			if(data.data.check_sos === appsmith.store.check_sos){
				showAlert(data.data.message, "warning")
			}
		})
	}, 
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
			"title": "Vị trí của bạn",
			"location": ""
		}
	},
	// async getVungNguyHiemGanBan () {
	// var dataNguyHiem = await getCanhBao.run().data;
	// return {
	// 'lat' : location.coords.latitude,
	// 'lng' : location.coords.longitude,
	// "title": "Vị trí của bạn",
	// "location": ""
	// }
	// }
	async getVungNguyHiemGanBan () {
		var dataNguyHiem = await getCanhBao.run();
		return dataNguyHiem.data;
	}


}