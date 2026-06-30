param(
    [string[]]$Files
)

foreach ($file in $Files) {
    $outFile = $file -replace '\.docx$','.txt'
    $out = "--- $file ---`n"
    $tempDir = Join-Path $env:TEMP ([guid]::NewGuid().ToString())
    $tempZip = $tempDir + ".zip"
    Copy-Item $file -Destination $tempZip
    Expand-Archive -Path $tempZip -DestinationPath $tempDir -Force
    $xmlPath = Join-Path $tempDir "word\document.xml"
    if (Test-Path $xmlPath) {
        $xmlContent = Get-Content $xmlPath -Raw
        $matches = [regex]::Matches($xmlContent, '<w:t[^>]*>(.*?)</w:t>')
        $texts = @()
        foreach ($match in $matches) {
            $texts += $match.Groups[1].Value
        }
        $out += ($texts -join " ")
    } else {
        $out += "Could not find document.xml"
    }
    Remove-Item $tempDir -Recurse -Force
    Remove-Item $tempZip -Force
    $out | Out-File -FilePath $outFile -Encoding utf8
}
