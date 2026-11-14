from pathlib import Path
import zipfile
root=Path(__file__).resolve().parents[1]
out=root/'SELENE_Lunar_Odyssey_v2_2.zip'
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
 for f in sorted(root.rglob('*')):
  if f.is_file() and f.suffix!='.zip' and not any(x in f.parts for x in ['.git','__pycache__','node_modules']):
   z.write(f,'SELENE_Lunar_Odyssey/'+str(f.relative_to(root)))
with zipfile.ZipFile(out) as z:
 assert z.testzip() is None
 print('ZIP OK:',len(z.namelist()),'files')
