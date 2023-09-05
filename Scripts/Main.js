var url = window.location.href;

if (!url.includes("useskin")) {
    window.location.href = url + "?useskin=vector";
}