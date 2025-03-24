"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Geography, Geographies, ComposableMap } from "react-simple-maps";

// Components
import { Badge } from "./ui/badge";
import { Card, CardTitle, CardHeader, CardContent } from "./ui/card";

const geoUrl = "/africa.json";

type CountryData = {
  id: string;
  name: string;
  languages: string[];
};

const countryData: CountryData[] = [
  {
    id: "1",
    name: "Rwanda",
    languages: ["Kinyarwanda"],
  },
  {
    id: "2",
    name: "Burundi",
    languages: ["Kirundi"],
  },
  {
    id: "3",
    name: "Kenya",
    languages: ["Swahili"],
  },
  {
    id: "4",
    name: "Tanzania",
    languages: ["Swahili"],
  },
  {
    id: "3",
    name: "Somalia",
    languages: ["Somali"],
  },
  {
    id: "5",
    name: "Ethiopia",
    languages: ["Afaan Oromo", "Amharic", "Tigrinya", "Wolayta", "Sidama"],
  },
  {
    id: "6",
    name: "Gambia",
    languages: ["Wolof"],
  },
  {
    id: "7",
    name: "South Africa",
    languages: ["Zulu", "Xhosa"],
  },
  {
    id: "8",
    name: "Zimbabwe",
    languages: ["Shona"],
  },
  {
    id: "9",
    name: "Madagascar",
    languages: ["Malagasy"],
  },
  {
    id: "10",
    name: "Republic of Congo",
    languages: ["Lingala"],
  },
  {
    id: "11",
    name: "DRC",
    languages: ["Lingala"],
  },
  {
    id: "12",
    name: "Malawi",
    languages: ["Chichewa"],
  },
  {
    id: "13",
    name: "Nigeria",
    languages: ["Fulani"],
  },
  {
    id: "14",
    name: "Democratic Republic of the Congo",
    languages: ["Lingala"],
  },
  {
    id: "15",
    name: "Tanzania",
    languages: ["Kiswahili"],
  },
];

const PADDING = 20;
const TOOLTIP_WIDTH = 288;
const TOOLTIP_HEIGHT = 300;

const AfricaMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState<CountryData | null>(
    null
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mapRef.current &&
        !mapRef.current.contains(target) &&
        !target.closest(".tooltip-card")
      ) {
        setTooltipContent(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const highlightedCountries = countryData.map((country) => country.name);

  interface GeoProperties {
    sovereignt: string;
  }

  interface Geo {
    rsmKey: string;
    properties: GeoProperties;
  }

  const calculateTooltipPosition = (
    mouseX: number,
    mouseY: number,
    mapRect: DOMRect
  ): { x: number; y: number; position: string } => {
    const rightSpace = mapRect.width - mouseX;
    const leftSpace = mouseX;
    const topSpace = mouseY;
    const bottomSpace = mapRect.height - mouseY;

    if (rightSpace >= TOOLTIP_WIDTH + PADDING) {
      return { x: mouseX + PADDING, y: mouseY, position: "right" };
    }

    if (leftSpace >= TOOLTIP_WIDTH + PADDING) {
      return {
        x: mouseX - TOOLTIP_WIDTH - PADDING,
        y: mouseY,
        position: "left",
      };
    }

    if (topSpace >= TOOLTIP_HEIGHT + PADDING) {
      return {
        x: mouseX - TOOLTIP_WIDTH / 2,
        y: mouseY - TOOLTIP_HEIGHT - PADDING,
        position: "top",
      };
    }

    if (bottomSpace >= TOOLTIP_HEIGHT + PADDING) {
      return {
        x: mouseX - TOOLTIP_WIDTH / 2,
        y: mouseY + PADDING,
        position: "bottom",
      };
    }

    return {
      x: mapRect.width / 2 - TOOLTIP_WIDTH / 2,
      y: mapRect.height / 2 - TOOLTIP_HEIGHT / 2,
      position: "center",
    };
  };

  const handleMouseEnter = (
    geo: Geo,
    event: React.MouseEvent<SVGPathElement>
  ): void => {
    const country = countryData.find(
      (c) => c.name === geo?.properties?.sovereignt
    );

    if (country && mapRef.current) {
      const mapRect = mapRef.current.getBoundingClientRect();
      const mouseX = event.clientX - mapRect.left;
      const mouseY = event.clientY - mapRect.top;

      const { x, y } = calculateTooltipPosition(mouseX, mouseY, mapRect);

      setTooltipPosition({ x, y });
      setTooltipContent(country);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const target = event.relatedTarget as HTMLElement;
    if (!target || !target.closest(".tooltip-card")) {
      setTooltipContent(null);
    }
  };

  return (
    <div className="relative lg:w-1/2 w-full mx-auto" ref={mapRef}>
      <ComposableMap
        width={1000}
        height={1500}
        projectionConfig={{
          scale: 900,
          center: [18, 0],
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.includes(
                geo?.properties?.sovereignt
              );

              return (
                <Geography
                  geography={geo}
                  key={geo.rsmKey}
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  fill={isHighlighted ? "#009263" : "#DDDDDD"}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#E0EEE9", outline: "none" },
                    pressed: { fill: "#E0EEE9", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <Card
          className="absolute w-72 z-10 transition-all duration-300 ease-in-out tooltip-card shadow-lg"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            transform: "translate(0, -50%)",
          }}
        >
          <CardHeader className="h-auto justify-center bg-green-50 border-b border-green-100 py-3">
            <CardTitle className="text-lg text-green-800">
              {tooltipContent.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">
              Languages:
            </h3>
            <div className="flex flex-row gap-2 flex-wrap">
              {tooltipContent.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Badge variant="outline" className="font-medium">
                    {lang}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AfricaMap;
