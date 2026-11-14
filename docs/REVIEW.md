# SELENE — rà soát trước nâng cấp v2.2

Căn cứ: mã v2.1 tại commit c11f427, thể lệ.pdf người dùng tải lên lại ngày 14/11/2026. Tài liệu cuộc thi là nguồn đối chiếu, không thay thế yêu cầu người dùng.

## P0 — đúng yêu cầu và không làm mất dữ liệu
- [x] Khởi tạo 5 phần ăn; giữ nguyên phần ăn của bản lưu cũ.
- [x] Cảnh báo đói ở ≤30%, nút ăn và dẫn đường tới kho, tăng tốc giảm độ no.
- [x] Kho lương thực hữu hạn và tránh kẹt khi hết đồ mang theo.
- [x] Đổi nhãn Sinh lực thành Máu, giữ giá trị hp của bản lưu.
- [x] Kiểm tra bảy ngày, thắng/thua, quét 6 giây, lưu/khôi phục giữa thao tác.

## P1 — phù hợp thử thách số 3
- [x] Điện có chi phí và phương án phục hồi; kế hoạch có đánh đổi rõ.
- [x] Thêm kịch bản bão hạt, phân biệt với vi thiên thạch; duy trì luật hai phòng an toàn.
- [x] Bổ sung nội dung NASA có trích nguồn và vị trí tích hợp, tách số liệu thật với luật game.
- [x] Bảng kỹ năng sau hành trình, công khai cách tính; không tự nhận là thang điểm NASA.

## P2 — hồ sơ và bàn giao
- [x] Đối chiếu Impact / Creativity / Validity / Relevance / Presentation, không tự đặt trọng số BGK.
- [x] Hướng dẫn sử dụng, kế hoạch kiểm thử nhóm, công bố AI và giấy phép.
- [x] Lưu lịch sử Git và đưa mã lên kho đội chỉ định; không đưa khóa truy cập hoặc dữ liệu cá nhân.

## Khoảng trống đã phát hiện
Điện v2.1 gần như chỉ là chỉ số trang trí; không có kho bổ sung lương thực; báo cáo cuối chưa chấm kỹ năng; nguồn NASA ít; chưa có kiểm thử bảy ngày bằng điều khiển di chuyển thực trong lõi; kiểm thử trình duyệt thật chưa thực hiện được vì thiếu công cụ managed browser theo quy trình Sites.

Trang đề đầy đủ chưa truy cập được trong lần trước. Bản tóm tắt của thử thách 3 ở Phụ lục 1 là căn cứ hiện có; sẽ thử xác minh lại. Không suy đoán yêu cầu chưa đọc được. Không thể tự chứng minh thành viên đội đã tham gia hoặc thời điểm làm phần lõi.


Các dấu hoàn thành thể hiện phần triển khai hoặc chuẩn bị hồ sơ; kiểm thử trình duyệt thật, tham gia của thành viên, quyền và thời điểm phát triển không được tự coi là đã xác minh. Xem TESTING.md và CONTEST.md.
