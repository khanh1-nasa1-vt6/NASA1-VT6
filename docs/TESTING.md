# Hướng dẫn kiểm thử và bàn giao v2.2

## Kiểm tra tự động

Cần Node.js trên máy người kiểm thử. Trong thư mục game chạy:

    node tests/run.cjs

Bộ kiểm tra gồm 22 kiểm tra lõi cũ đã điều chỉnh theo luật mới, 11 kiểm tra trắc nghiệm/chỉ dẫn, 16 kiểm tra tài nguyên, một hành trình bảy ngày bằng đầu vào di chuyển tương đương WASD, và kiểm tra khởi tạo/luồng UI với DOM/canvas giả lập.

Hành trình tự động không dịch chuyển nhân vật tức thời, không bơm máu/pin/đồ vào kho; dùng đi lại, E, sạc, ăn và ngủ. Có lưu/khôi phục giữa lúc quét mỗi ngày, tổng bảy lần. Xem tests/campaign-results.json. Bộ này kiểm tra lõi, không chứng nhận bố cục hoặc phím/cảm ứng trong trình duyệt thật.

## Cả đội cần chơi thử trước bản chính thức

Mỗi thành viên dùng mã kiểm thử không phải thông tin cá nhân, ghi trình duyệt, ngày kiểm tra thật, tình huống, kỳ vọng, kết quả, ảnh lỗi nếu cần và cách tái hiện. Không điền trước “đạt” khi chưa làm. Tình trạng hiện tại: các mục thử trình duyệt dưới đây chưa được xác minh bằng công cụ trình duyệt thật trong môi trường phát triển.

1. Chrome hoặc Edge máy tính: mở game, Tab tới Bắt đầu, Enter để chơi; WASD và mũi tên không cuộn trang khi điều khiển.
2. Chọn kế hoạch mỗi ngày; nút khóa lựa chọn sau khi chọn, bản mô tả chi phí và tốc độ sạc đúng.
3. Vào căn cứ bằng G/E, đi đến giá bên phải, E lấy dụng cụ. Giữ E đủ 3 giây sửa, nhả giữa chừng phải đặt lại tiến độ.
4. Vào hầm bằng H/E, đi đến bảng bên trong, sửa tấm chắn ngày 3. Trong cả hai phòng không mất máu, ôxy tăng.
5. Chơi tự nhiên hoặc dùng bản lưu kiểm thử riêng để đưa độ no xuống 30; cảnh báo hiện, F dùng đúng một phần và làm độ no tăng. Giữ cảnh báo nếu chưa ăn; vẫn đi lại được.
6. Dùng hết 5 phần ban đầu; F hướng về kho. E ở kho trong căn cứ bổ sung và giảm kho đúng số phần. Thử kho còn ít hơn 5; không âm kho hoặc sinh thêm đồ sau ngủ.
7. Sửa/lấy mẫu/ngủ bị chặn khi đang đói; ăn rồi phải làm tiếp được, không phải tải lại trang.
8. Điện thiếu: không làm mất mẫu khi không thể quét. Máy phát cho +20 điện/−8 độ no và chặn khi quá đói. So sánh ba kế hoạch, pin đầy không tiếp tục tốn điện.
9. Robot chỉ lấy một lần mỗi bãi/ngày, tối đa 3 mẫu. Máy quét đúng 6 giây thời gian chơi; giao lại khi đang quét không nhân đôi/mất mẫu.
10. Robot hết pin: C bế, về trạm, C đặt, E bật/tắt sạc. Robot đang sạc không tự theo vào căn cứ.
11. Kiểm tra riêng vi thiên thạch và bão hạt: thông báo bắt đầu/kết thúc, không vẽ hai sự kiện thành một, không mất máu khi trong phòng.
12. Trắc nghiệm: câu tương lai khóa; chỉ chấm/thưởng một lần. Xem nguồn/giải thích; bỏ qua vẫn qua ngày được.
13. P tạm dừng; đổi tab/rời cửa sổ tự dừng. Ôxy, độ no, quét và robot phải đứng lại; quay lại tiếp tục được.
14. Giữa khi quét, P lưu rồi tải lại trang; Tiếp tục phải giữ ngày, đồ ăn, máu, cargo và thời gian quét, không nhân đôi kết quả. Lặp lại sau ngủ và khi robot đang sạc.
15. Bản lưu v2.1: giữ ngày, máu và thức ăn cũ (kể cả trên 5), báo cáo/câu hỏi; các trường mới được bổ sung. Dùng hồ sơ riêng để không làm mất lượt thật.
16. Đủ bảy ngày: 7 thiết bị, tối thiểu 14 báo cáo, tổng kết kỹ năng có dữ kiện. Kiểm tra trường hợp chưa làm trắc nghiệm, không được ghi là đúng.
17. Thử thất bại và Thử lại đầu ngày. Kiểm tra thưởng câu hỏi không nhận hai lần.
18. Mở từng nguồn NASA, tải nhật ký, đọc hồ sơ. Liên kết nguồn cần mạng, game và bản ngoại tuyến không cần mạng.
19. Giải nén gói ZIP ra thư mục mới, mở index.html. Nếu trình duyệt chặn lưu file:// hoặc ở chế độ riêng tư, ghi rõ giới hạn và kiểm tra lại ở bản web.
20. Thử độ rộng 1366×768 và 1920×1080; chữ/điều khiển không bị che, nút kho/câu hỏi/nguồn đóng mở bằng bàn phím. Cảm ứng là kiểm tra bổ sung, không thay cho máy tính thi.

## Chưa hoàn thành hoặc chưa thể xác nhận

- Kiểm thử trình duyệt/thiết bị thật, phản hồi của từng thành viên và thẩm định khoa học độc lập: chưa có bằng chứng; đội thực hiện.
- Hiệu quả giáo dục thực nghiệm: chưa đo; không công bố con số tác động.
- Trang đề đầy đủ đang lỗi truy cập; mới đối chiếu bản tóm tắt trong PDF.
- Quyền tác giả, thời điểm đóng góp, đăng ký và thời hạn chính thức: đội/BTC xác minh.
- GitHub có nhánh nâng cấp để đội xem lại; không tự ghi nhận đã được đội duyệt hoặc đã thi chính thức.
