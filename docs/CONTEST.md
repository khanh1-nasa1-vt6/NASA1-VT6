# SELENE v2.2 — đối chiếu thử thách và thể lệ

Đội: NASA1-VT6. Trạng thái: bản thử nghiệm để cả đội chơi và phản hồi trước khi công bố chính thức. Soạn ngày 14/11/2026 theo giờ Việt Nam.

## Căn cứ và phạm vi

Đã đọc thể lệ.pdf được tải lại trong yêu cầu này (12 trang). Thử thách số 3 ở Phụ lục 1 trang 8 yêu cầu trò chơi/ứng dụng cho học sinh quản lý căn cứ Mặt Trăng hoặc Sao Hỏa, cân bằng dưỡng sinh, che chắn bức xạ, năng lượng và lương thực. Game chọn Mặt Trăng. Trang đề đầy đủ https://www.spaceappschallenge.org/2026/challenges/build-a-junior-astronaut-mission-trainer/ trả lỗi 502 khi tra cứu ngày 14/11/2026; chưa xác nhận được các yêu cầu chi tiết ngoài bản tóm tắt. Đội cần đối chiếu lại khi trang truy cập được.

## Bằng chứng cho năm tiêu chí của BGK

| Tiêu chí | Cơ chế và bằng chứng trong sản phẩm | Giới hạn cần nói đúng |
| --- | --- | --- |
| Impact | Tiếng Việt, không cần tài khoản; chạy ngoại tuyến; hướng dẫn theo bước, trắc nghiệm và bản đánh giá kỹ năng tải được qua nhật ký. | Chưa có thử nghiệm với lớp học; không đưa số liệu tác động giả. |
| Creativity | Kết hợp đi lại, cứu NOVA, lấy mẫu, phân tích, quản lý điện/đồ ăn và kế hoạch có đánh đổi. | Không khẳng định độc nhất hoặc đã khảo sát mọi sản phẩm khác. |
| Validity | Nguồn NASA gắn với lời giải, báo cáo và thẻ kiến thức; thông số luật game tách riêng; có kiểm tra tự động và mô phỏng di chuyển bảy ngày. | Không mô phỏng vật lý kỹ thuật đầy đủ; chưa được chuyên gia độc lập thẩm định; chưa thử trình duyệt thật trong môi trường thực hiện. |
| Relevance | Ôxy và sự cố lọc; bão hạt và nơi trú; điện cho sửa/sạc/quét; năm phần ăn mang theo và kho hữu hạn. Tài nguyên khoa học NASA được dùng để giải thích các cơ chế này. | Không nhận đã xử lý dữ liệu LRO hay dữ liệu quan trắc thô. |
| Presentation | Giữ giao diện game 2D; hướng dẫn theo trạng thái; nguồn có liên kết; có bản ngoại tuyến, kế hoạch demo và hồ sơ này. | Cần đội kiểm tra máy thi và quyền truy cập demo thực tế. |

Thể lệ không công bố trọng số cho năm tiêu chí; hồ sơ không tự gán trọng số hay dự đoán điểm BGK.

## Tài nguyên NASA đã tích hợp

Tệp science.js chứa thông tin, URL nguồn và vị trí sử dụng. Trong game mở “Đọc thông tin & nguồn NASA”. Nguồn: Moon Facts; NASA Glenn Moon; Top Moon Questions; ECLSS; What Is Lunar Regolith?; The Lunar South Pole Region; Radiation Protection; Scientists Grow Plants in Lunar Soil.

Ví dụ: nguồn ECLSS giải thích việc cấp O₂ không thay thế loại CO₂; nguồn môi trường cực nam giải thích không thể coi mọi nơi luôn có ánh sáng; nguồn regolith và băng giúp giới hạn suy luận từ mẫu. Đây là sử dụng tài nguyên khoa học theo mục IV.4. Không dùng logo, hình ảnh hoặc đoạn mã NASA; không tuyên bố NASA chứng nhận game.

## Thông số là quy ước game

- Ngày là chương nhiệm vụ, tăng khi ngủ; không phải ngày Mặt Trăng thực. Các chỉ số là 0–100, không phải áp suất, nồng độ khí hoặc liều bức xạ.
- Hành trình mới có 5 phần mang theo và 30 phần trong kho. Kho không tự đầy khi qua ngày. E tại kho bổ sung tới 5 phần, trừ đúng số lấy từ kho. Thưởng trắc nghiệm có thể làm túi vượt 5; chỉ nhận mỗi câu một lần.
- Độ no ngoài trời −0,05 điểm/giây (trước đây −0,035); trong phòng −0,018 điểm/giây; ngủ −12 điểm. F tiêu thụ một phần, +35 độ no và tối đa +5 máu.
- Độ no ≤30%: cảnh báo trên màn hình, yêu cầu ăn trước khi sửa/lấy mẫu/ngủ; vẫn di chuyển, trú ẩn và lấy đồ được. Khi độ no bằng 0 và cả túi/kho đều hết thức ăn, nhiệm vụ dừng vì cạn nguồn tiếp tế; không trừ máu trong phòng.
- Ôxy ngoài trời −0,12 điểm/giây; từ ngày 2 nếu chưa sửa lọc khí thì trừ thêm −0,096. Trong hai phòng +9 điểm/giây. Đây là mô hình đơn giản hóa, không nhận là O₂ bị CO₂ “tiêu thụ” theo tỉ lệ thật.
- Hai phòng giả định có bảo vệ cơ bản và dưỡng sinh dự phòng, luôn không mất máu khi ở trong. Tấm chắn cần sửa là hệ bổ sung/dự phòng. Bão hạt ngày 3 từ giây 40–70 làm mất 1,2 máu/giây ngoài trời. Vi thiên thạch là kịch bản riêng, không phải mưa nước.
- Mỗi lần sửa tốn 3 điện. Phân tích vẫn đúng 6 giây: tiết kiệm tốn 2 điện và sạc 1,5%/giây; cân bằng tốn 4 điện và sạc 3%/giây; nghiên cứu tốn 6 điện và thưởng riêng 2 điểm nghiên cứu/lượt. Điểm thưởng không nói rằng kết quả hóa học chính xác hơn.
- Sạc tốn 1 điện cho 15 điểm pin; pin đầy không tiếp tục trừ điện. Máy phát dự phòng +20 điện đổi 8 độ no, yêu cầu độ no >38 và ở gần máy. Điện mặt trời sau sửa +0,12/giây, ngày 4 chỉ +0,015; trước sửa +0,006. Ngủ tốn 8 điện. Đây không phải hệ số NASA.
- Mẫu và kết quả quét là giả định. Không có phép đo thật, số liệu hàm lượng băng hoặc mẫu Apollo thật. Không cộng nước uống từ một dấu hiệu mẫu.

## Đánh giá kỹ năng cuối hành trình

Thang nội bộ 100 điểm, năm phần tối đa 20. Không phải thang chấm dự thi hoặc chứng chỉ NASA.

1. Sinh tồn: 20 trừ phần nguyên của giây ở ngưỡng ôxy/độ no ≤30 chia 30, trừ phần nguyên của giây ngoài trời khi có hiểm họa chia 10; chặn dưới 0.
2. Quản lý tài nguyên: 2 điểm cho mỗi ngày có bản ghi, thêm 1 điểm/ngày kết thúc với điện ≥15 và độ no >30; chặn trên 20.
3. Vận hành: làm tròn số thiết bị đã sửa / 7 × 20.
4. Nghiên cứu: làm tròn số báo cáo / 14 × 20; chặn trên 20. Thưởng nghiên cứu báo riêng.
5. Kiến thức: làm tròn số câu đúng / 7 × 20. Câu chưa làm không được tính là đúng.

Hiển thị dữ kiện bên cạnh điểm và số lần thử lại. Bản lưu cũ chỉ có thống kê tài nguyên kể từ khi cập nhật; không bịa lại lịch sử đã chơi. Đây là chỉ dấu trong game, chưa phải công cụ đánh giá giáo dục đã chuẩn hóa.

## Demo bốn phút

1. Giới thiệu chủ đề 3, bảng Máu–Ôxy–Độ no–Điện và 5 phần ăn.
2. Chọn kế hoạch, vào căn cứ lấy dụng cụ, chỉ kho và máy phát dự phòng.
3. Giữ E sửa; cùng NOVA lấy mẫu, giao và chờ quét 6 giây. Mở báo cáo có nguồn.
4. Chỉ cảnh báo đói, thao tác F, nơi trú và bảng nguồn NASA.
5. Mở bản đánh giá sau một hành trình thử hoàn chỉnh, giải thích cách tính và giới hạn. Không coi kết quả mô phỏng là số liệu hiệu quả giáo dục thực nghiệm.

## Điều kiện hợp lệ cần đội hoàn tất

Mục IV yêu cầu phần lõi được phát triển trong thời gian thi, công bố AI/tài nguyên, tham gia và đóng góp thật. Lịch sử Git thể hiện các thay đổi đã lưu; không tự chứng minh cả đội đã tham gia hoặc từng phần mã được tạo trong khoảng hợp lệ. Hai PDF đã có trước và phiên bản game cũ phải được khai báo trung thực, không đổi ngày hoặc tác giả để trông như tạo mới.

Phụ lục 2 yêu cầu quyền sử dụng và trích nguồn. Mã/hình vẽ gốc được cấp phép MIT; NASA giữ điều kiện nguồn gốc. AI hỗ trợ: OpenAI ChatGPT/Codex (phân tích PDF, thiết kế, viết mã/nội dung và kiểm tra). Không có AI vận hành hay khóa API trong game.

Điền đúng thành viên/vai trò, xác minh đăng ký, quyền truy cập demo và hồ sơ phụ huynh khi cần; không đưa dữ liệu riêng của trẻ em lên kho. Thể lệ có mâu thuẫn: mục IV trang 4 ghi trước 11:00 ngày 15/11/2026, bảng mục VI trang 5 ghi 12:00. Chuẩn bị trước 11:00 giờ Việt Nam và xác nhận với BTC; hạn toàn cầu trong tài liệu là 23:59 cùng ngày. Không xem các mốc do tài liệu cung cấp là đã được xác minh độc lập với BTC.
