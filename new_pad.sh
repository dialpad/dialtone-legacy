PAD_NAME=$1

if [[ -z "$PAD_NAME" ]]; then
  echo "usage: ./new_pad PAD_NAME";
  exit 1;
fi;

if [[ -d "$PAD_NAME" ]]; then
  echo "\"$PAD_NAME\" already exists. rename it or pick a new name.";
  exit 1;
fi;

mkdir -p "$PAD_NAME";

cp -r _skel/* "$PAD_NAME";

sed -i -e "s/__PAD_NAME__/$PAD_NAME/" "$PAD_NAME/index.html";

echo "created new pad \"$PAD_NAME\"";
echo "run \"./start_server\" to view it in your browser.";
