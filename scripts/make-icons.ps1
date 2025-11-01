Add-Type -AssemblyName System.Drawing

function New-Png {
    param(
        [Parameter(Mandatory=$true)][string]$Path,
        [Parameter(Mandatory=$true)][int]$Width,
        [Parameter(Mandatory=$true)][int]$Height,
        [Parameter(Mandatory=$true)][int]$R,
        [Parameter(Mandatory=$true)][int]$G,
        [Parameter(Mandatory=$true)][int]$B,
        [bool]$Maskable = $false
    )

    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($R, $G, $B))
    $gfx.FillRectangle($brush, 0, 0, $Width, $Height)

    if ($Maskable) {
        $penWidth = [math]::Max($Width, $Height) * 0.08
        $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255,255,255), [single]$penWidth)
        $gfx.DrawEllipse($pen, $Width * 0.1, $Height * 0.1, $Width * 0.8, $Height * 0.8)
        $pen.Dispose()
    }

    $brush.Dispose()
    $gfx.Dispose()
    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

$root = Split-Path -Parent $PSScriptRoot
$iconsDir = Join-Path $root 'public\icons'
New-Item -ItemType Directory -Force -Path $iconsDir | Out-Null

New-Png -Path (Join-Path $iconsDir 'pwa-192.png') -Width 192 -Height 192 -R 14 -G 165 -B 233 -Maskable:$false
New-Png -Path (Join-Path $iconsDir 'pwa-512.png') -Width 512 -Height 512 -R 14 -G 165 -B 233 -Maskable:$false
New-Png -Path (Join-Path $iconsDir 'maskable-512.png') -Width 512 -Height 512 -R 14 -G 165 -B 233 -Maskable:$true

Write-Host "Icons generated at $iconsDir"







