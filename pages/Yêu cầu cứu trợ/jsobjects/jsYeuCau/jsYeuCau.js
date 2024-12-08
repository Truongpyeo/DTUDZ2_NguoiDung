export default {
	load () {
		const socket = new AppsmithSocket().connect()
		socket.on("send_location_response", (data) => {
			showAlert(data.data.message, "warning")
		})
	}, 
	sendSOS  () {
		const socket = new AppsmithSocket().connect();
		var payload = {
			message : "CÓ NGƯỜI VỪA YÊU CẦU TRỢ CẤP"
		};
		socket.emit("sos", payload);
	},
	createNhanCuuTro:async ()=>{
		const location = this.getLocation();
		const uuid = UUID.genV4();
		const createdAt = new Date();
		if(txt_noiDung.text.length>0 ){
			await insertTroCap.run({
				location: appsmith.store.address || location,
				id:uuid.hexNoDelim,
				created_at: createdAt.toISOString(),
			});
			// await getNhanLucByNguonLuc.run();
			showAlert("Yêu cầu của bạn đã đã gửi thành công và đang chờ xử lý!", "success");
			this.sendSOS();
			navigateTo("Trang Chủ");
		}
		else{
			showAlert("Vui lòng nhập đầy đủ thông tin!!", "error");
		}
	},
	checklogin:  async () => {
		const check = appsmith.store.id_user;
		if(check === undefined){
			navigateTo("Trang Chủ");
			showAlert("Bạn chưa đăng nhập","error");
		}
	},
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		appsmith.store
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
		}
	},
	async getLocation (location) {
		return {
			'lat' : location.latitude,
			'lng' : location.longitude,
		}
	},
	// async getLocation (location) {
	// showAlert(location,"success");
	// }
};


