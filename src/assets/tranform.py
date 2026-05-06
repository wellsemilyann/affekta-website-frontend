from pathlib import Path
import base64

# 当前脚本所在的目录（就是 ASSETS 这个目录）
root = Path(__file__).parent

# 输出目录：ASSETS/decoded
out_dir = root / "decoded"
out_dir.mkdir(exist_ok=True)

for path in root.glob("*.png"):
    print(f"处理: {path.name}")

    # 读文本内容
    try:
        text = path.read_text().strip()
    except UnicodeDecodeError:
        print(f"  跳过（看起来已经是正常二进制图片）")
        continue

    # 如果是 data URL，去掉前缀
    if text.startswith("data:image"):
        text = text.split(",", 1)[1]

    # base64 解码
    try:
        data = base64.b64decode(text)
    except Exception as e:
        print(f"  解码失败：{e}，跳过")
        continue

    # 简单检查是不是 PNG
    if not data.startswith(b"\x89PNG\r\n\x1a\n"):
        print("  解码后不是 PNG（文件头不对），跳过")
        continue

    # 写入 decoded/ 下的新文件（和原文件同名）
    out_path = out_dir / path.name
    out_path.write_bytes(data)
    print(f"  OK -> {out_path}")

print("完成。看看 decoded/ 目录里的图片是否能正常打开。")