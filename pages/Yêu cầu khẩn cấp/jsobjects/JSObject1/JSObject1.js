export default {
	async getLocation () {
		var location = await appsmith.geolocation.getCurrentPosition()
		appsmith.store
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
		}
	},
	sendSOS  () {
		const socket = new AppsmithSocket().connect();
		var payload = {
			message : "CÓ NGƯỜI VỪA GỌI CỨU TRỢ KHẨN CẤP"
		};
		socket.emit("sos", payload);
	},
		load () {
		const socket = new AppsmithSocket().connect()
		socket.on("send_location_response", (data) => {
			showAlert(data.data.message, "warning")
		})
	}, 
	createNhanCuuTro:async ()=>{
		const location = this.getLocation();
		const uuid = UUID.genV4();
		const createdAt = new Date();
		await insertKhanCap.run({
			location: appsmith.store.address || location,
			id:uuid.hexNoDelim,
			created_at: createdAt.toISOString(),
		});
		// await getNhanLucByNguonLuc.run();
		showAlert("Yêu cầu của bạn đã đã gửi thành công và đang chờ xử lý!", "success");
		this.sendSOS();
		navigateTo("Trang Chủ");


	}

};
