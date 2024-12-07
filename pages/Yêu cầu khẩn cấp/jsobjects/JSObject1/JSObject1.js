export default {
	createNhanCuuTro:async ()=>{
		const uuid = UUID.genV4();
		const createdAt = new Date();
		const hoTen = txt_hoTen.text;
		const soDienThoai = txt_soDienThoai.text;
		if(txt_noiDung.text.length>0 && txt_soDienThoai.text.length>0 && txt_diaChi.text.length>0 && txt_hoTen.text.length>0){
			const phonePattern = /^[0-9]{10}$/;
			if (!phonePattern.test(soDienThoai)) {
				showAlert("Số điện thoại không hợp lệ! (Phải có 10 chữ số)", "error");
				return ;
			}
			await insertKhanCap.run({
				id:uuid.hexNoDelim,
				created_at: createdAt.toISOString(),
			});
			// await getNhanLucByNguonLuc.run();
			showAlert("Yêu cầu của bạn đã đã gửi thành công và đang chờ xử lý!", "success");

		}
		else{
			showAlert("Vui lòng nhập đầy đủ thông tin!!", "error");
		}
	},

};
