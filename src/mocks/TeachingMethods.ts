import { MethodCardProps } from "@/components/TeachingMethodology/MethodCard";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StairsIcon from '@mui/icons-material/Stairs';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react';
export const methodCardData: MethodCardProps[] = [
    {
        icon: React.createElement(TipsAndUpdatesIcon),
        heading: 'Conceptual Learning',
        method1: 'Theory Sessions',
        method2: 'Concept Videos',
        method3: 'Interactive Quizzes',
    },
    {
        icon: React.createElement(StairsIcon),
        heading: 'Problem Solving',
        method1: 'Practice Problems',
        method2: 'Mock Tests',
        method3: 'Doubt Sessions',
    },
    {
        icon: React.createElement(MenuBookIcon),
        heading: 'Revision Techniques',
        method1: 'Summary Notes',
        method2: 'Flash Cards',
        method3: 'Revision Tests',
    },
];