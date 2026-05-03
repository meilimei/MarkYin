interface AdBannerProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
}

export default function AdBanner({
  slot = "placeholder",
  format = "horizontal",
  className = "",
}: AdBannerProps) {
  const sizeClasses = {
    horizontal: "h-[90px] w-full",
    vertical: "h-[600px] w-[160px]",
    rectangle: "h-[250px] w-[300px]",
  };

  return (
    <div
      className={`ad-container rounded-lg ${sizeClasses[format]} ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
    >
      {/* Replace with actual Google AdSense code:
          <ins className="adsbygoogle"
               style={{ display: "block" }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot={slot}
               data-ad-format="auto"
               data-full-width-responsive="true" />
      */}
      <span>Ad Space</span>
    </div>
  );
}
