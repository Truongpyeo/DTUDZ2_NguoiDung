export default {
	createNhanCuuTro:async ()=>{
		const uuid = UUID.genV4();
		await insertTroCap.run({id:uuid.hexNoDelim});
		// await getNhanLucByNguonLuc.run();
		showAlert("Yêu cầu của bạn đã đã gửi thành công và đang chờ xử lý!", "success");
		// closeModal(Modal1.name);
	}
};
