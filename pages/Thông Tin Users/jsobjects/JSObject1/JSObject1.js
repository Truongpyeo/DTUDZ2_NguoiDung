export default {
	checklogin:  async () => {
		const check = appsmith.store.id_user;
		if(check === undefined){
			navigateTo("Trang Chủ");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
	load () {
		const socket = new AppsmithSocket().connect()
		socket.on("send_location_response", (data) => {
			showAlert(data.data.message, "warning")
		})
	}, 
}